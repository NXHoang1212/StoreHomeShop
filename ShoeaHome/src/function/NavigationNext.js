export const GO_BACK = (navigation) => {
    navigation.goBack();
};

export const GO_TO_SIGNUP = (navigation) => {
    navigation.navigate('Register');
};

export const GO_TO_FORGOT_PASSWORD = (navigation) => {
    navigation.navigate('ForgotPassword');
};

export const GO_TO_NEW_PASSWORD = (navigation) => {
    navigation.navigate('NewsPassword');
};

export const GO_TO_SIGNIN = (navigation) => {
    navigation.navigate('Login');
};

export const GO_TO_HOME = (navigation) => {
    navigation.navigate('HomeOption');
};

export const GO_TO_SmS = (navigation) => {
    navigation.navigate('SmsOtp');
};

export const GO_TO_ONBOARDING = (navigation) => {
    navigation.navigate('Onboarding');
};

export const GO_TO_NOTIFY = (navigation) => {
    navigation.navigate('Notify');
};

export const GO_TO_FAVOURITE = (navigation) => {
    navigation.navigate('Favourite');
};

export const GO_TO_ACCOUNT = (navigation) => {
    navigation.navigate('Account');
};

export const GO_TO_SHOES = (navigation) => {
    navigation.navigate('Shoes');
};

export const GO_TO_SEARCH = (navigation) => {
    navigation.navigate('SearchShoes');
};

export const GO_TO_EDITPROFILE = (navigation,) => {
    navigation.navigate('EditProfile');
};


export const GO_TO_ADDRESS = (navigation) => {
    navigation.navigate('Address', { addressLine1: 'Tên địa chỉ', addressLine2: 'Thông tin chi tiết địa chỉ' });
};

export const GO_TO_ADDNEWRESS = (navigation, item) => {
    navigation.navigate('AddNewRess', { address: item });
};

export const GO_TO_HELPCENTER = (navigation) => {
    navigation.navigate('TabHelpCenter');
};

export const GO_TO_INVITEFRIENDS = (navigation) => {
    navigation.navigate('InviteFriends');
};

export const GO_TO_LANGUAGE = (navigation) => {
    navigation.navigate('Language');
};

export const GO_TO_PAYMENT = (navigation) => {
    navigation.navigate('Payment');
};

export const GO_TO_NOTIFICATION = (navigation) => {
    navigation.navigate('Notification');
};

export const GO_TO_SECURITY = (navigation) => {
    navigation.navigate('Security');
};

export const GO_TO_CUSTOMSERVICE = (navigation) => {
    navigation.navigate('CustomService');
};

//product
export const GO_TO_NIKE = (navigation) => {
    navigation.navigate('Nike');
};

export const GO_TO_ADIDAS = (navigation) => {
    navigation.navigate('Adidas');
};

export const GO_TO_CONVERSE = (navigation) => {
    navigation.navigate('Converse');
};

export const GO_TO_PUMA = (navigation) => {
    navigation.navigate('Puma');
};

export const GO_TO_ASICS = (navigation) => {
    navigation.navigate('Asics');
};

export const GO_TO_REEBOOK = (navigation) => {
    navigation.navigate('Reebook');
};

export const GO_TO_NEWBLANCE = (navigation) => {
    navigation.navigate('NewBlance');
};

export const GO_TO_BALANCIA = (navigation) => {
    navigation.navigate('Balancia');
};

export const GO_TO_SHOESDETAIL = (navigation, id) => {
    navigation.navigate('ShoesDetail', { id: id });
};

export const GO_TO_MOSTPOPULAR = (navigation) => {
    navigation.navigate('MostPopular');
};

export const GO_TO_SPECIALOFFERS = (navigation) => {
    navigation.navigate('SpecialOffers');
};

export const GO_TO_MODALOPTIONSEARCH = (navigation) => {
    navigation.navigate('ModalOptionSearch');
};

export const GO_TO_SEARCHRENDER = (navigation) => {
    navigation.navigate('SearchRender');
};


//order
export const GO_TO_CHECKOUTORDER = (navigation, selectedAddress) => {
    navigation.navigate('CheckOutOrder', { selectedAddress: selectedAddress, });
};

//promoCode
export const GO_TO_PROMOCODE = (navigation) => {
    navigation.navigate('PromoCode');
};

//shipping
export const GO_TO_SHIPPINGADDRESS = (navigation) => {
    navigation.navigate('ShippingAddress');
};

export const GO_TO_CHOOSESHIPPING = (navigation) => {
    navigation.navigate('ChooseShipping');
};

export const GO_TO_PAYMENTMETHOD = (navigation) => {
    navigation.navigate('PaymentMethod');
};

export const GO_TO_TRACKORDER = (navigation) => {
    navigation.navigate('TrackOrder');
};

export const GO_TO_TransactionHistory = (navigation) => {
    navigation.navigate('TransactionHistory');
}

export const GO_TO_DETAILHISTORY = (navigation, id) => {
    navigation.navigate('DetailHistory', { id: id });
}

//cart
export const GO_TO_CART = (navigation) => {
    navigation.navigate('Cart');
};