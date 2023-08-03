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
    navigation.navigate('LoginUser', { screen: 'Notify' });
};

export const GO_TO_FAVOURITE = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Favourite' });
};

export const GO_TO_ACCOUNT = (navigation) => {
    navigation.navigate('Account');
};

export const GO_TO_SHOES = (navigation) => {
    navigation.navigate('ShoesHome', { screen: 'Home' });
};

export const GO_TO_SEARCH = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'SearchShoes' });
};

export const GO_TO_EDITPROFILE = (navigation,) => {
    navigation.navigate('LoginUser', { screen: 'EditProfile' });
};


export const GO_TO_ADDRESS = (navigation) => {
    // navigation.navigate('LoginUser', { addressLine1: 'Tên địa chỉ', addressLine2: 'Thông tin chi tiết địa chỉ' });
    navigation.navigate('LoginUser', { screen: 'Address', params: { addressLine1: 'Tên địa chỉ', addressLine2: 'Thông tin chi tiết địa chỉ' } });
};

export const GO_TO_ADDNEWRESS = (navigation, item) => {
    navigation.navigate('AddNewRess', { address: item });
};

export const GO_TO_HELPCENTER = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'TabHelpCenter' });
};

export const GO_TO_INVITEFRIENDS = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'InviteFriends' });
};

export const GO_TO_LANGUAGE = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Language' });
};

export const GO_TO_PAYMENT = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Payment' });
};

export const GO_TO_NOTIFICATION = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Notification' });
};

export const GO_TO_SECURITY = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Security' });
};

export const GO_TO_CUSTOMSERVICE = (navigation) => {
    navigation.navigate('CustomService');
};

//product
export const GO_TO_NIKE = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Nike' });
};

export const GO_TO_ADIDAS = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Adidas' });
};

export const GO_TO_CONVERSE = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Converse' });
};

export const GO_TO_PUMA = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Puma' });
};

export const GO_TO_ASICS = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Asics' });
};

export const GO_TO_REEBOOK = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Reebook' });
};

export const GO_TO_NEWBLANCE = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'NewBlance' });
};

export const GO_TO_BALANCIA = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'Balancia' });
};

export const GO_TO_SHOESDETAIL = (navigation, id) => {
    navigation.navigate('LoginUser', { screen: 'ShoesDetail', params: { id: id } });
};

export const GO_TO_MOSTPOPULAR = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'MostPopular' });
};

export const GO_TO_SPECIALOFFERS = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'SpecialOffers' });
};

export const GO_TO_MODALOPTIONSEARCH = (navigation) => {
    navigation.navigate('ModalOptionSearch');
};

export const GO_TO_SEARCHRENDER = (navigation) => {
    navigation.navigate('SearchRender');
};


//order
export const GO_TO_CHECKOUTORDER = (navigation, selectedAddress) => {
    navigation.navigate('LoginUser', { screen: 'CheckOutOrder', params: { selectedAddress: selectedAddress } });
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
    navigation.navigate('LoginUser', { screen: 'PaymentMethod' });
};

export const GO_TO_TRACKORDER = (navigation) => {
    navigation.navigate('TrackOrder');
};

export const GO_TO_TransactionHistory = (navigation) => {
    navigation.navigate('LoginUser', { screen: 'TransactionHistory' });
}

export const GO_TO_DETAILHISTORY = (navigation, id) => {
    navigation.navigate('LoginUser', { screen: 'DetailHistory', params: { id: id } });
}

//cart
export const GO_TO_CART = (navigation) => {
    navigation.navigate('Cart');
};