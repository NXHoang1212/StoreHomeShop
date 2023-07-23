import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import StyleSpecialOffers from '../../style/StyleApi/StyleSpecialOffers'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK } from '../../function/NavigationNext'
import images from '../../item/ImageHomeShoes'
import { FlashList } from '@shopify/flash-list'

const SpecialOffers = ({ navigation }) => {
    const renderImage = ({ item, index }) => {
        return (
            <View style={StyleSpecialOffers.viewimageitem}>
                <Image
                    source={item}
                    style={StyleSpecialOffers.image}
                    priority={FastImage.priority.high}
                />
            </View>
        );
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        >
            <View style={StyleSpecialOffers.container}>
                <View style={StyleSpecialOffers.header}>
                    <View style={StyleSpecialOffers.headerbar}>
                        <TouchableOpacity onPress={() => GO_BACK(navigation)} >
                            <Icon name="arrow-left" size={30} color="#393939" style={StyleSpecialOffers.iconback} />
                        </TouchableOpacity>
                        <Text style={StyleSpecialOffers.title}>Special Offers</Text>
                        <TouchableOpacity style={StyleSpecialOffers.iconsearch} >
                            <Icon name="dots-horizontal-circle-outline" size={30} color="#393939" />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleSpecialOffers.viewimageitem}>
                        {images.map((image, index) => (
                            <TouchableOpacity key={index}>
                                <Image source={image} style={StyleSpecialOffers.image} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default SpecialOffers