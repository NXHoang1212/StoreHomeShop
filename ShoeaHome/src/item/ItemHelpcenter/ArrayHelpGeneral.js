import { useState } from 'react';

const initialNotifications = [
    { id: 1, title: 'What is Shoea ?', message: 'A shoe is an item of footwear, intended to protect, and comfort the human foot. They are often worn with a sock. Shoes are also commonly used as an item for decoration, and fashion. The design of shoes has varied a lot through time, and from culture to culture, with form originally being tied to function', visible: false },
    { id: 2, title: 'How to use Shoea ?', message: 'A shoe is an item of footwear, intended to protect, and comfort the human foot. They are often worn with a sock. Shoes are also commonly used as an item for decoration, and fashion. The design of shoes has varied a lot through time, and from culture to culture, with form originally being tied to function', visible: false },
    { id: 3, title: 'How do i cancel a orders product', message: 'Call the customer service number provided on the confirmation email or order page. This is faster than email if the website has a 24-7 customer service line. It is a good idea to try both the email/order cancellation form method and call to ensure your cancellation is received', visible: false },
    { id: 4, title: `Why did my payment didn't working ?`, message: 'The most common reasons for your payment to fail are either filters your bank applies to certain transactions made online, or amount limitations applied to your card. If your payment is being rejected, please reach out to your bank to get additional information', visible: false },
    { id: 5, title: 'Is shoea free to use', message: 'Yes app free in users and no charges you can come in freely to buy products', visible: false },
    { id: 6, title: 'How to add promo when checkout', message: 'You just need to take the promotion and paste it or enter it to be able to use your promo code to discount the product ', visible: false },
    { id: 7, title: `Why i can't add a new payment method`, message: 'You just need to take the promotion and paste it or enter it to be able to use your promo code to discount the product ', visible: false },
    { id: 8, title: `Why are the my shipping prices different ?`, message: 'Because the product you buy is taken from within the country or abroad, the price will still vary from place to place when you buy the product', visible: false },
];

const HelpCenterArray = () => {
    const [notifications, setNotifications] = useState(initialNotifications);

    return { notifications, setNotifications };
};

export default HelpCenterArray;
