import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import StyleSpecialOffers from '../../style/StyleApi/StyleSpecialOffers'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK } from '../../function/NavigationNext'
import images from '../../item/ImageHomeShoes'
import AxiosInstance from '../../../config/context/AxiosIntance'
import ThemeContext from '../../../config/context/ThemContext'

const SpecialOffers = ({ navigation }) => {
    const [discountedProducts, setDiscountedProducts] = useState({
        Nike: [],
        Adidas: [],
        Converse: [],
        Puma: [],
    });
    const Theme = useContext(ThemeContext);

    // Lấy danh sách sản phẩm giảm giá từ server
    const getDiscountedProducts = async () => {
        try {
            const response = await AxiosInstance().get('product');
            // Chuyển đổi giá từ chuỗi sang số trước khi áp dụng giảm giá
            const productsWithConvertedPrice = response.map((product) => ({
                ...product,
                price: parseFloat(product.price.replace('$', '')),
                rating: 4.5,
                views: `8,152`,
            }));
            // Lọc và phân loại sản phẩm giảm giá theo từng hãng (adidas, nike, converse, puma)
            const filteredDiscountedProducts = {
                Nike: productsWithConvertedPrice.filter((product) => product.categoryId.name === 'Nike'),
                Adidas: productsWithConvertedPrice.filter((product) => product.categoryId.name === 'Adidas'),
                Converse: productsWithConvertedPrice.filter((product) => product.categoryId.name === 'Converse'),
                Puma: productsWithConvertedPrice.filter((product) => product.categoryId.name === 'Puma'),
            };
            setDiscountedProducts(filteredDiscountedProducts);
        } catch (error) {
            console.log('Lỗi khi lấy sản phẩm giảm giá:', error);
        }
    };
    // Lấy sản phẩm giảm giá khi mở màn hình
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDiscountedProducts();
        });
        getDiscountedProducts();
        return unsubscribe;
    }, []);

    const applyDiscount = (image) => {
        const brand = getBrandFromImage(image);
        const products = discountedProducts[brand];
        // Lấy tỷ lệ giảm giá tương ứng từ hình ảnh được chọn
        let discountPercent = 0;
        if (image === images[0]) {
            discountPercent = 0.3; // 30%
        } else if (image === images[1]) {
            discountPercent = 0.7; // 70%
        } else if (image === images[2]) {
            discountPercent = 0.7; // 70%
        } else if (image === images[3]) {
            discountPercent = 0.57; // 57%
        }
        // Áp dụng tỷ lệ giảm giá cho giá của từng sản phẩm (nếu giá là một số hợp lệ)
        const discountedProductsUpdated = {
            ...discountedProducts,
            [brand]: products.map((product) => {
                if (!isNaN(product.price)) {
                    // Tính giá đã giảm giá từ giá gốc và tỷ lệ giảm giá
                    const discountedPrice = product.price * (1 - discountPercent);
                    // Làm tròn giá đã giảm giá về 2 chữ số thập phân
                    const roundedDiscountedPrice = Math.round(discountedPrice * 100) / 100;
                    // Trả về sản phẩm với giá đã giảm giá
                    return {
                        ...product,
                        price: roundedDiscountedPrice,
                        discount: discountPercent * 100,
                    };
                } else {
                    // Xử lý trường hợp giá không hợp lệ (ví dụ: NaN)
                    console.log("Invalid price for product:", product);
                    return product;
                }
            }),
        };
        setDiscountedProducts(discountedProductsUpdated);

        // Chuyển hướng đến màn hình BannerPromo và truyền danh sách sản phẩm giảm giá
        navigation.navigate('BannerPromo', { discountedProducts: discountedProductsUpdated[brand] });
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
        <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}  >
            <View style={[StyleSpecialOffers.container, { backgroundColor: Theme.container }]}>
                <View style={StyleSpecialOffers.header}>
                    <View style={StyleSpecialOffers.headerbar}>
                        <TouchableOpacity onPress={() => GO_BACK(navigation)}>
                            <Icon name="arrow-left" size={30} color={Theme.color} style={StyleSpecialOffers.iconback} />
                        </TouchableOpacity>
                        <Text style={[StyleSpecialOffers.title, { color: Theme.color }]}>Special Offers</Text>
                        <TouchableOpacity style={StyleSpecialOffers.iconsearch} >
                            <Icon name="dots-horizontal-circle-outline" size={30} color={Theme.color} />
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
