import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import styleBannerPromo from '../../style/StyleApi/StyleBannerPromo';
import ItemShoes from '../../home/ItemShoes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_BACK } from '../../function/NavigationNext';
import ThemeContext from '../../../config/context/ThemContext';

const BannerPromo = ({ route, navigation }) => {
    const { discountedProducts } = route.params;
    console.log("🚀 ~ file: BannerPromo.js:6 ~ BannerPromo ~ discountedProducts:", discountedProducts)
    const Theme = useContext(ThemeContext);

    return (
        <View style={[styleBannerPromo.container, { backgroundColor: Theme.container }]}>
            <View style={styleBannerPromo.header}>
                <TouchableOpacity onPress={() => GO_BACK(navigation)}>
                    <Icon name="arrow-left" size={30} color={Theme.color} />
                </TouchableOpacity>
                <Text style={[styleBannerPromo.title, { color: Theme.color }]}>Special Offers</Text>
                <TouchableOpacity style={styleBannerPromo.iconsearch}>
                    <Icon name="magnify" size={27} color={Theme.color} />
                </TouchableOpacity>
            </View>
            <View style={styleBannerPromo.viewflashlit}>
                <FlatList
                    data={discountedProducts}
                    numColumns={2}
                    renderItem={({ item }) => <ItemShoes item={item} />}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </View>
    );
};

export default BannerPromo;
