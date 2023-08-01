import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styleMyCart from '../style/styleCart/StyleMycart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from '../../config/context/ThemContext';

const BottomSheetContent = ({ selectedItem, deleteItem, dismissSheet }) => {
    if (!selectedItem) {
        return null; // Nếu không có item nào được chọn thì không hiển thị gì cả
    }
    const handleDeleteItem = async () => {
        await deleteItem(selectedItem._id); // Gọi hàm xóa sản phẩm từ giỏ hàng
        dismissSheet(); // Đóng bottom sheet sau khi xóa
    };
    const Theme = useContext(ThemeContext);

    return (
        <View style={[styleMyCart.bottomSheetContainer]}>
            <Text style={styleMyCart.bottomSheetText}>Remove From Cart?</Text>
            <View style={styleMyCart.line} />
            <View style={styleMyCart.viewbottomcontainer}>
                {selectedItem.image && (
                    <Image style={styleMyCart.bottomSheetImage} source={{ uri: selectedItem.image }} />
                )}
                <View style={styleMyCart.viewbottomItem}>
                    <Text style={styleMyCart.bottomSheetProduct}>{selectedItem.name}</Text>
                    <Text style={styleMyCart.bottomSheetText1}>Black | Size = 42</Text>
                    <Text style={styleMyCart.bottomSheetText2}>${selectedItem.price.toFixed(2)}</Text>
                </View>
                <View style={[styleMyCart.viewselectedItem]}>
                    <View style={[styleMyCart.viewcart2bottomtext]}>
                        <TouchableOpacity style={styleMyCart.viewiconminus}>
                            <Icon name="minus" size={23} color="#000" />
                        </TouchableOpacity>
                        <Text style={styleMyCart.viewcart2text1}>{selectedItem.quantity}</Text>
                        <TouchableOpacity style={styleMyCart.viewiconplus}>
                            <Icon name="plus" size={23} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styleMyCart.line} />
            <View style={styleMyCart.bottomSheetButtonContainer}>
                <TouchableOpacity style={styleMyCart.bottomSheetButtonGray} onPress={dismissSheet}>
                    <Text style={styleMyCart.bottomSheetButtonTextGray}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleMyCart.bottomSheetButtonWhite} onPress={handleDeleteItem}>
                    <Text style={styleMyCart.bottomSheetButtonTextWhite}>Yes, Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BottomSheetContent;
