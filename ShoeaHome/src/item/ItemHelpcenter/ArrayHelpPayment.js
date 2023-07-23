import { useState } from 'react';

const HelpCenterPaymentrArray = [
    { id: 1, title: 'What is google payments Center ?', message: `The Google payments centre is a single location where you can manage the ways you pay for or get paid through Google products and services. You can use the payment information stored in the payment centre to pay for other Google products like Play digital content, Drive storage space or hardware on Google Store`, visible: false },
    { id: 2, title: `How do I contact payment center ?`, message: `The Sender may request cancellation of the P2P Payment by contacting GPC via our Contact Us page, or by calling +84: 079.542.146.`, visible: false },
    { id: 3, title: 'How do I stop automatic payments ?', message: `Call and write the company.Tell the company that you are taking away your permission for the company to take automatic payments out of your bank account`, visible: false },
    { id: 4, title: `How do I check my Google payments ?`, message: 'From the bottom of the screen, slide your finger up to show your contacts. To see all transactions: At the bottom of the screen, tap All transactions. To see transactions with a specific person: Tap the contact', visible: false },
    { id: 5, title: 'What is the payment card number ?', message: `Payment Card Number, Primary Account Number (PAN), or Card Number, is the card identifier found on payment cards, such as credit cards and debit cards. The card number is primarily a card identifier`, visible: false },
    { id: 6, title: 'How does Truebill app working ?', message: `Truebill's Smart Savings account automates your savings.The money is withdrawn from your checking account in the amount and interval of your choosing and held in an FDIC-insured bank account. You choose a savings goal, and Truebill will keep you advised of your progress`, visible: false },
    { id: 7, title: `Which is a payment card ?`, message: `There are four types of payment cards; credit card, debit card, ATM card and prepaid card. Credit Card is a card entitling its holder to buy goods and services based on the holder's promise to pay for these goods and services`, visible: false },
    { id: 8, title: `How do I remove Mastercard from my app`, message: `Tap the “Three dots”icon in the upper-right corner of the screen. Select “Settings” and then go to “Payment methods.” Choose the card you want to delete and then hit “Delete.” Click “Done” to confirm`, visible: false },
];

const HelpCenterPayment = () => {
    const [Payment, SetPayment] = useState(HelpCenterPaymentrArray);
    return { Payment, SetPayment };
};

export default HelpCenterPayment;
