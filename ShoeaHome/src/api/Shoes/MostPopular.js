import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyleMostPopular from '../../style/StyleApi/StyleMostPopular'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GO_BACK } from '../../function/NavigationNext'
import axios from 'axios'
import { HOST } from '../../../config/Constant'
import ItemShoes from '../../home/ItemShoes'
import { FlashList } from '@shopify/flash-list'
import AxiosInstance from '../../../config/context/AxiosIntance'

const MostPopular = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("Tab 1");
    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    };
    /*Lấy tất cả những sản phẩm nổi bật trong 70 sản phẩm */
    useEffect(() => {
        AxiosInstance().get(`product/featured/70`)
            .then(response => {
                const featuredProducts = response.filter(item => item.isFutured === 'on');
                const popularProducts = featuredProducts.map(item => ({
                    ...item,
                    rating: 4.5,
                    views: `8,152`,
                }));
                setData(popularProducts);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);

    /*Lấy sản phẩm theo từng danh mục chúng ta chứa nổi bật */
    useEffect(() => {
        axios.get(`${HOST().HOST}product/featured/230`)
            .then(response => {
                const featuredProductCategories = response.data.filter(item => item.isFutured === 'on');
                const popularProductsCategory = featuredProductCategories.map(item => ({
                    ...item,
                    rating: 4.5,
                    views: `8,152`,
                }));
                setCategories(popularProductsCategory);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);

    /*Gọi sản phẩm chứa danh mục nổi bật  */
    const fillterProductCategoryName = (category) => {
        console.log("🚀 ~ file: MostPopular.js:25 ~ fillterProductCategory ~ category", category)
        return categories.filter(p => p.categoryId.name === category);
    };

    return (
        <View style={StyleMostPopular.container}>
            <View style={StyleMostPopular.header}>
                <TouchableOpacity onPress={() => GO_BACK(navigation)}>
                    <Icon name="arrow-left" size={30} style={StyleMostPopular.iconback} />
                </TouchableOpacity>
                <Text style={StyleMostPopular.headerText}>Most Popular</Text>
                <TouchableOpacity style={StyleMostPopular.iconsearch} >
                    <Icon name="magnify" size={30} color='black' />
                </TouchableOpacity>
            </View>
            <View style={StyleMostPopular.viewbody}>
                <View style={StyleMostPopular.viewtab}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={StyleMostPopular.viewtab}>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainer, activeTab === "Tab 1" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 1")}>
                                <View >
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 1" ? StyleMostPopular.activeText : null]}>All</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainer, activeTab === "Tab 2" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 2")}>
                                <View>
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 2" ? StyleMostPopular.activeText : null]}>Nike</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainerother, activeTab === "Tab 3" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 3")}>
                                <View>
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 3" ? StyleMostPopular.activeText : null]}>Adidas</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainer, activeTab === "Tab 4" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 4")}>
                                <View>
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 4" ? StyleMostPopular.activeText : null]}>Puma</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainer, activeTab === "Tab 5" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 5")}>
                                <View >
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 5" ? StyleMostPopular.activeText : null]}>Asics</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainerother, activeTab === "Tab 6" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 6")}>
                                <View>
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 6" ? StyleMostPopular.activeText : null]}>Reebook</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainerother1, activeTab === "Tab 7" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 7")}>
                                <View >
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 7" ? StyleMostPopular.activeText : null]}>New Balance</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainerother1, activeTab === "Tab 8" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 8")}>
                                <View>
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 8" ? StyleMostPopular.activeText : null]}>Converse</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleMostPopular.tabcontainerother1, activeTab === "Tab 9" ? StyleMostPopular.activeTab : null,]}
                                onPress={() => handleTabPress("Tab 9")}>
                                <View>
                                    <Text style={[StyleMostPopular.texttab, activeTab === "Tab 9" ? StyleMostPopular.activeText : null]}>Balenciaga</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <View>
                        {activeTab === "Tab 1" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={data}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : activeTab === "Tab 2" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={fillterProductCategoryName("Nike")}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : activeTab === "Tab 3" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={fillterProductCategoryName("Adidas")}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : activeTab === "Tab 4" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={fillterProductCategoryName("Puma")}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : activeTab === "Tab 5" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={fillterProductCategoryName("Asics")}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : activeTab === "Tab 6" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={fillterProductCategoryName("Reebook")}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : activeTab === "Tab 7" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={fillterProductCategoryName("NewBalance")}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : activeTab === "Tab 8" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={fillterProductCategoryName("Converse")}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : activeTab === "Tab 9" ? (
                            <View style={StyleMostPopular.viewtabcontent}>
                                <FlashList
                                    numColumns={2}
                                    data={fillterProductCategoryName("Balenciaga")}
                                    renderItem={({ item }) => <ItemShoes item={item} />}
                                    estimatedItemSize={100}
                                    keyExtractor={(item) => item._id}
                                    contentContainerStyle={{ paddingBottom: 200 }}
                                />
                            </View>
                        ) : null}
                    </View>
                </View>
            </View>
        </View>
    )
};

export default MostPopular