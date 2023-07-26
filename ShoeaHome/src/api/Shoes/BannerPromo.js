import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import styleBannerPromo from '../../style/StyleApi/StyleBannerPromo';

const BannerPromo = ({ route }) => {
    const { discountedProducts } = route.params;
    console.log("🚀 ~ file: BannerPromo.js:6 ~ BannerPromo ~ discountedProducts:", discountedProducts)

    // Function to render each item in the FlatList
    const renderItem = ({ item }) => {
        return (
            <View>
                <Image source={{ uri: item.image }} style={styleBannerPromo.image} />
                <Text>{item.brand}</Text>
                <Text>{item.name}</Text>
                {item.discount ? (
                    <Text>Discount: {item.discount}%</Text>
                ) : (
                    <Text>No discount</Text>
                )}
                <Text>Price: {item.price}</Text>
            </View>
        );
    };


    return (
        <View style={styleBannerPromo.container}>
            <FlatList
                data={discountedProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

export default BannerPromo;
