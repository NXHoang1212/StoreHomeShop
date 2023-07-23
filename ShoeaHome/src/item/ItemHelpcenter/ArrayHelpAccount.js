import { useState } from 'react';

const HelpCenterAccountArray = [
    { id: 1, title: 'My account is corrupted, how can I fix it ?', message: `You can check account shoea app if you don't can't maybe method google facebook or apple`, visible: false },
    { id: 2, title: `How i can't forget password`, message: `You can't forget password by enter the phone or email after you will get verification code to you reset password`, visible: false },
    { id: 3, title: 'My account has not been on the shoea app for a long time ?', message: `You can't login account before you register whether you for a long time comback app`, visible: false },
    { id: 4, title: `What if my account is locked ?`, message: 'You need contact hotline: 0799542146 to be able to handle the problem all 12/24h', visible: false },
    { id: 5, title: 'Can this account be linked to google?', message: 'Yes you linked to google or facebook apple all complete you want to use', visible: false },
    { id: 6, title: 'How do I delete my account?', message: 'You cant delete in my profile if then you choose logout or delelte account is to be', visible: false },
    { id: 7, title: `This my account free or registration money ?`, message: 'Of course a free and no money when i choose product and payment method', visible: false },
    { id: 8, title: `My account linked to payment ?`, message: 'Yes you cant account linked in payment product', visible: false },
];

const HelpCenterAccount = () => {
    const [Account, SetAccount] = useState(HelpCenterAccountArray);
    return { Account, SetAccount };
};

export default HelpCenterAccount;
