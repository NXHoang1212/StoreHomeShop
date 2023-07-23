import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleFaQ from '../../../style/StyleFaQ';
import HelpCenterArray from '../../../item/ItemHelpcenter/ArrayHelpGeneral';
import HelpCenterAccount from '../../../item/ItemHelpcenter/ArrayHelpAccount';
import HelpCenterRepair from '../../../item/ItemHelpcenter/ArrayHelpRepair';
import HelpCenterPayment from '../../../item/ItemHelpcenter/ArrayHelpPayment';
import HelpCenterShipper from '../../../item/ItemHelpcenter/ArrayHelpShipper';
import { handleItemPress, renderItem } from '../../../item/ItemHelpcenter/HandlePressItemHelp';
import ThemeContext from '../../../../config/context/ThemContext';

const FaQ = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentResultIndex, setCurrentResultIndex] = useState(-1);
  const [showSearch, setShowSearch] = useState(true);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showView, setShowView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(ThemeContext);
  const { notifications, setNotifications } = HelpCenterArray();
  const { Account, SetAccount } = HelpCenterAccount();
  const { Repair, SetRepair } = HelpCenterRepair();
  const { Payment, SetPayment } = HelpCenterPayment();
  const { Shipper, SetShipper } = HelpCenterShipper();

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearch = (text) => {
    const generalResults = notifications.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    const accountResults = Account.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    const repairResults = Repair.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    const paymentResults = Payment.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    const shipperResults = Shipper.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    const allResults = [
      ...generalResults.map((item) => ({ ...item, key: `General_${item.id}` })),
      ...accountResults.map((item) => ({ ...item, key: `Account_${item.id}` })),
      ...repairResults.map((item) => ({ ...item, key: `Repair_${item.id}` })),
      ...paymentResults.map((item) => ({ ...item, key: `Payment_${item.id}` })),
      ...shipperResults.map((item) => ({ ...item, key: `Shipper_${item.id}` }))
    ];
    setSearchResults(allResults);
    setCurrentResultIndex(-1);
    setShowSearchResults(allResults.length > 0);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    if (text === '') {
      setShowSearchResults(false);
    } else {
      handleSearch(text);
    }
  };

  const handleResultPress = (index) => {
    setCurrentResultIndex(index);
    setShowSearchResults(false);
    setSearchText(searchResults[index].title);
  };
  const handleView = () => {
    setShowView(!showView);
  };

  return (
    <View style={[StyleFaQ.container, { backgroundColor: Theme.backgroundColor }]}>
      <View style={StyleFaQ.header}>
        <View style={StyleFaQ.viewcontainer}>
          <View style={StyleFaQ.viewtabcontainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={StyleFaQ.viewtab}>
                <TouchableOpacity
                  style={[StyleFaQ.tabcontainer, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 1" ? StyleFaQ.activeTab : null]}
                  onPress={() => handleTabPress("Tab 1")}
                >
                  <Text style={[StyleFaQ.texttab, { color: Theme.color }, activeTab === "Tab 1" ? StyleFaQ.activeText : null]}>General</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[StyleFaQ.tabcontainer, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 2" ? StyleFaQ.activeTab : null]}
                  onPress={() => handleTabPress("Tab 2")}
                >
                  <Text style={[StyleFaQ.texttab, { color: Theme.color }, activeTab === "Tab 2" ? StyleFaQ.activeText : null]}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[StyleFaQ.tabcontainerother, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 3" ? StyleFaQ.activeTab : null]}
                  onPress={() => handleTabPress("Tab 3")}
                >
                  <Text style={[StyleFaQ.texttab, { color: Theme.color }, activeTab === "Tab 3" ? StyleFaQ.activeText : null]}>Repair</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[StyleFaQ.tabcontainer, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 4" ? StyleFaQ.activeTab : null]}
                  onPress={() => handleTabPress("Tab 4")}
                >
                  <Text style={[StyleFaQ.texttab, { color: Theme.color }, activeTab === "Tab 4" ? StyleFaQ.activeText : null]}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[StyleFaQ.tabcontainer, { backgroundColor: Theme.centerbackground }, activeTab === "Tab 5" ? StyleFaQ.activeTab : null]}
                  onPress={() => handleTabPress("Tab 5")}
                >
                  <Text style={[StyleFaQ.texttab, { color: Theme.color }, activeTab === "Tab 5" ? StyleFaQ.activeText : null]}>Shipper</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View>
            {showSearch && (
              <View style={[StyleFaQ.viewsearch, { backgroundColor: Theme.backgroundBorder }]}>
                <View style={StyleFaQ.viewsearch1}>
                  <Icon name="magnify" size={25} color={Theme.color} />
                  <TextInput
                    style={[StyleFaQ.inputsearch, { color: Theme.color }]}
                    placeholder="Search"
                    placeholderTextColor={Theme.color}
                    onChangeText={handleSearchTextChange}
                    onFocus={handleView}
                  />
                  <TouchableOpacity style={StyleFaQ.iconoption}>
                    <Icon name="tune-variant" size={22} color={Theme.color} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          {activeTab === "Tab 1" ? (
            <View style={StyleFaQ.viewtabcontent}>
              <View style={StyleFaQ.viewFooter2}>
                <FlatList
                  data={notifications}
                  renderItem={({ item }) => renderItem({ item, handleItemPress: () => handleItemPress(item, notifications, setNotifications) })}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
            </View>
          ) : activeTab === "Tab 2" ? (
            <View style={StyleFaQ.viewtabcontent}>
              <View style={StyleFaQ.viewFooter2}>
                <FlatList
                  data={Account}
                  renderItem={({ item }) => renderItem({ item, handleItemPress: () => handleItemPress(item, Account, SetAccount) })}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
            </View>
          ) : activeTab === "Tab 3" ? (
            <View style={StyleFaQ.viewtabcontent}>
              <View style={StyleFaQ.viewFooter2}>
                <FlatList
                  data={Repair}
                  renderItem={({ item }) => renderItem({ item, handleItemPress: () => handleItemPress(item, Repair, SetRepair) })}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
            </View>
          ) : activeTab === "Tab 4" ? (
            <View style={StyleFaQ.viewtabcontent}>
              <View style={StyleFaQ.viewFooter2}>
                <FlatList
                  data={Payment}
                  renderItem={({ item }) => renderItem({ item, handleItemPress: () => handleItemPress(item, Payment, SetPayment) })}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
            </View>
          ) : activeTab === "Tab 5" ? (
            <View style={StyleFaQ.viewtabcontent}>
              <View style={StyleFaQ.viewFooter2}>
                <FlatList
                  data={Shipper}
                  renderItem={({ item }) => renderItem({ item, handleItemPress: () => handleItemPress(item, Shipper, SetShipper) })}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
            </View>
          ) : null}
        </View>
        {showSearchResults && (
          <View style={[StyleFaQ.viewsearch3, { backgroundColor: Theme.backgroundBorder }]}>
            <ScrollView>
              {searchResults.map((result, index) => (
                <TouchableOpacity key={result.key} onPress={() => handleResultPress(index)}>
                  <View style={StyleFaQ.viewsearch2}>
                    <Text style={[StyleFaQ.textsearch, { color: Theme.color }]}>{result.title}</Text>
                    <View style={StyleFaQ.line2} />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

export default FaQ;
