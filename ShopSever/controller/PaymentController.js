const paypal = require('paypal-rest-sdk');
const paymentService = require('../service/PaymentService');
const OrderModel = require('../model/OrderModel');

paypal.configure({
  mode: 'sandbox', // Sandbox or live
  client_id: 'AQBGJCGJpTraHvp99lZDXdkZ9oJQabezxx1uG0kb36IxJG4oSMQPdSvK4MHA0GcbtPIV9FwZLYQ4s9CG',
  client_secret: 'EKcUdlbkLVEwK63HST9MKrW2gzwpeU79tU14Y0b9l37_-0jfluYKGn0ya4lJk6gN6EGEtVPM3tZgWTte',
});

const createPayment = async (req, res) => {
  const paymentData = req.body; // Lấy dữ liệu thanh toán từ request body

  try {
    const order = await OrderModel.findOne({ order: paymentData.orderId }); // Tìm đơn hàng theo orderId, sử dụng "_id" thay cho "order"
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    // Lưu payment vào database
    const payment = await paymentService.createPayment({
      ...paymentData,
      userId: order.userId,
      orderId: order.orderId,
      paymentMethod: 'PayPal',
      paymentStatus: 'pending',
      paymentTime: Date.now(),
    });
    console.log('Payment created:', payment);
    // Tạo payment trên PayPal
    const createPaymentJson = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: 'http://localhost:3000/payment/success',
        cancel_url: 'http://localhost:3000/payment/cancel',
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: order.orderId,
                sku: 'item',
                price: order.total,
                currency: 'USD',
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: 'USD',
            total: order.total,
          },
          description: 'This is the payment description.',
        },
      ],
    };
    paypal.payment.create(createPaymentJson, function (error, payment) {
      if (error) {
        throw error;
      } else {
        // console.log('Create Payment Response');
        // console.log(payment);
        res.redirect(payment.links[1].href);
      }
    });
  } catch (error) {
    console.error('Error creating PayPal payment:', error);
    res.status(500).json({ error: 'Failed to create PayPal payment' });
  }
};

const successPayment = async (req, res) => {
  var paymentId = req.query.paymentId;
  var payerId = { payer_id: req.query.PayerID };
  try {
    const payment = await paymentService.updatePaymentStatus(paymentId, 'success');
    console.log('Update payment:', payment);
    paypal.payment.execute(paymentId, payerId, async function (error, payment) {
      if (error) {
        console.error(JSON.stringify(error));
        throw error;
      } else {
        if (payment.state == 'approved') {
          console.log('payment completed successfully');
        } else {
          console.log('payment not successful');
        }
      }
    });
    res.status(200).json({ message: 'Payment success' });
  } catch (error) {
    console.error('Error updating PayPal payment:', error);
    res.status(500).json({ error: 'Failed to update PayPal payment' });
  }
};

module.exports = {
  createPayment,
  successPayment,
};