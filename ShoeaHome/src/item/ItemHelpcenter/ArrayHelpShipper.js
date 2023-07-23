import { useState } from 'react';

const HelpCenterShipperArray = [
    { id: 1, title: 'How to do free shipping over $100 on Shoea ?', message: `From your Shopify admin, go to Settings > Shipping and delivery.Next to the shipping profile where you want to add a free shipping rate, click Manage.Add the shipping rate to each shipping zone where you want the free shipping rate: Click Add rate. ...Click Save.`, visible: false },
    { id: 2, title: 'Who delivers for Shoea ?', message: `You can buy shipping labels directly in Shopify, print multiple labels at a time, and get orders out the door quickly. Shopify Shipping works with USPS, UPS, and DHL in the United States, Canada Post in Canada, and Sendle in Australia, and offers multiple mail classes with each carrier`, visible: false },
    { id: 3, title: 'Why is Shopify charging me for shipping ?', message: `After the invoice is processed, your threshold is reset. If you don't reach this threshold within your billing cycle, then the shipping label charges are added to your monthly Shopify subscription bill`, visible: false },
    { id: 4, title: 'How do I remove shipping costs on Shopify ?', message: `Go to “Products”. Select all the products you want to disable shipping, then click Edit product. Click Add fields, in the Shipping section, select Require Shipping. Here, you can add the field for Requires shipping, then make sure all of your digital products have this checkbox unchecked`, visible: false },
    { id: 5, title: 'How do I get 90 days free on Shopify ?', message: `Is there a way to extend my Shopify free trial? Yes, you can get your Shopify free trial for 90 days. The normal free trial is for three days which is for $1. After that, you can also enter the free trial for 90 days by creating an account and entering the billing details`, visible: false },
    { id: 6, title: 'Does Shopify use DHL ?', message: `Shopify makes it easy to build and manage your online store in the cloud. With our official Apps in the Shopify App Store, you benefit from a quick and easy shipment process, enabling you to create DHL labels and send tracking IDs to your customers`, visible: false },
    { id: 7, title: 'Can I use my own shipping on Shopify ?', message: `You can use shipping, local delivery, and local pickup methods. If you use shipping carriers to deliver your products, then you can add flat or calculated shipping rates to your general shipping profile that apply to all your products, or add products to custom shipping profiles with their own shipping rates`, visible: false },
    { id: 8, title: 'Is it better to offer free shipping on Shopify ?', message: `By offering free shipping as an incentive when shoppers buy additional products through cross-selling or up-selling, you can easily convince them to buy more from you. This increases your average order value and makes shipping less expensive for you. By doing this, you enjoy a better profit margin on your products`, visible: false },
];

const HelpCenterShipper = () => {
    const [Shipper, SetShipper] = useState(HelpCenterShipperArray);
    return { Shipper, SetShipper };
};

export default HelpCenterShipper;
