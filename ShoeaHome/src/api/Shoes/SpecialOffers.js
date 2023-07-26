import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyleSpecialOffers from '../../style/StyleApi/StyleSpecialOffers'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK } from '../../function/NavigationNext'
import images from '../../item/ImageHomeShoes'
import AxiosInstance from '../../../config/context/AxiosIntance'

const SpecialOffers = ({ navigation }) => {
    const [discountedProducts, setDiscountedProducts] = useState({
        Nike: [],
        Adidas: [],
        Converse: [],
        Puma: [],
    });

    // Lấy sản phẩm từ server
    const getDiscountedProducts = async () => {
        try {
            const response = await AxiosInstance().get('product');
            // Do something with the response to filter and categorize discounted products by brand (adidas, nike, converse, puma)
            // Nếu response là một mảng các sản phẩm, bạn cần xử lý để lọc và phân loại sản phẩm giảm giá theo từng hãng (adidas, nike, converse, puma)
            // Ví dụ:
            const filteredDiscountedProducts = {
                Nike: response.filter((product) => product.categoryId.name === 'Nike'),
                Adidas: response.filter((product) => product.categoryId.name === 'Adidas'),
                Converse: response.filter((product) => product.categoryId.name === 'Converse'),
                Puma: response.filter((product) => product.categoryId.name === 'Puma'),
            };
            setDiscountedProducts(filteredDiscountedProducts);
            // console.log('🚀 ~ file: SpecialOffers.js:43 ~ getDiscountedProducts ~ filteredDiscountedProducts', filteredDiscountedProducts);
        } catch (error) {
            console.log('Lỗi khi lấy sản phẩm giảm giá:', error);
        }
    };

    // Lấy sản phẩm giảm giá khi mở màn hình
    useEffect(() => {
        getDiscountedProducts();
    }, []);

    const applyDiscount = (image) => {
        const brand = getBrandFromImage(image);
        const products = discountedProducts[brand];
        console.log('🚀 ~ file: SpecialOffers.js:61 ~ applyDiscount ~ products', products);
        navigation.navigate('BannerPromo', { discountedProducts: products });
    };

    const getBrandFromImage = (image) => {
        if (image === images[0]) {
            return 'Nike';
        } else if (image === images[1]) {
            return 'Adidas';
        } else if (image === images[2]) {
            return 'Converse';
        } else if (image === images[3]) {
            return 'Puma';
        }
        return null;
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        >
            <View style={StyleSpecialOffers.container}>
                <View style={StyleSpecialOffers.header}>
                    <View style={StyleSpecialOffers.headerbar}>
                        <TouchableOpacity onPress={() => GO_BACK(navigation)}>
                            <Icon name="arrow-left" size={30} color="#393939" style={StyleSpecialOffers.iconback} />
                        </TouchableOpacity>
                        <Text style={StyleSpecialOffers.title}>Special Offers</Text>
                        <TouchableOpacity style={StyleSpecialOffers.iconsearch} >
                            <Icon name="dots-horizontal-circle-outline" size={30} color="#393939" />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleSpecialOffers.viewimageitem}>
                        {images.map((image, index) => (
                            <TouchableOpacity key={index} onPress={() => applyDiscount(image)}>
                                <Image source={image} style={StyleSpecialOffers.image} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default SpecialOffers;
