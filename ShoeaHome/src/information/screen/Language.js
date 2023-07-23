import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CheckBox } from 'react-native-elements';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import StyleLanguage from '../../style/StyleLanguage';
import { GO_BACK, GO_TO_ACCOUNT } from '../../function/NavigationNext';
import { language } from '../../function/ArrayCountry';
import { LanguageContext } from '../../../config/context/LanguageContext';
import ThemeContext from '../../../config/context/ThemContext';

const Language = ({ navigation }) => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const [selectedCheckbox, setSelectedCheckbox] = useState(selectedLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(ThemeContext);

  useEffect(() => {
    setSelectedCheckbox(selectedLanguage);
  }, [selectedLanguage]);

  const handleCheckBoxPress = (label) => {
    setSelectedLanguage(label);
    setSelectedCheckbox(label);
    navigation.navigate('Shoes', {
      screen: 'Account',
      params: { selectedLanguage: label },
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[StyleLanguage.container, { backgroundColor: Theme.backgroundColor }]}>
        <View style={[StyleLanguage.body, { backgroundColor: Theme.backgroundColor, }]}>
          <View style={StyleLanguage.viewheader}>
            <TouchableOpacity onPress={() => GO_BACK(navigation)}>
              <Icon name="arrow-left" size={30} style={[StyleLanguage.iconback, { color: Theme.color }]} />
            </TouchableOpacity>
            <Text style={[StyleLanguage.textheader, { color: Theme.color }]}>Language</Text>
          </View>
          <View style={StyleLanguage.viewlanguage}>
            <Text style={[StyleLanguage.textlanguage, { color: Theme.color }]}>Suggested</Text>
            <View style={StyleLanguage.viewoption}>
              <View style={StyleLanguage.viewcheckbox}>
                <Text style={[StyleLanguage.textlanguageoption, { color: Theme.color }]}>English(US)</Text>
                <CheckBox
                  checkedColor={Theme.color}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  uncheckedColor={Theme.color}
                  checked={selectedCheckbox === 'English(US)'}
                  onPress={() => handleCheckBoxPress('English(US)')}
                />
              </View>
              <View style={StyleLanguage.viewcheckbox}>
                <Text style={[StyleLanguage.textlanguageoption, { color: Theme.color }]}>English(UK)</Text>
                <CheckBox
                  checkedColor={Theme.color}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  uncheckedColor={Theme.color}
                  checked={selectedCheckbox === 'English(UK)'}
                  onPress={() => handleCheckBoxPress('English(UK)')}
                />
              </View>
              <View style={StyleLanguage.line} />
            </View>
            <View style={StyleLanguage.viewoptionflashlit}>
              <Text style={[StyleLanguage.textlanguage, { color: Theme.color }]}>Language</Text>
              <FlatList
                data={language}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={StyleLanguage.viewcheckbox}
                    onPress={() => handleCheckBoxPress(item.label)}
                  >
                    <Text style={[StyleLanguage.textlanguageoption, { color: Theme.color }]}>{item.label}</Text>
                    <CheckBox
                      checkedColor={Theme.color}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      uncheckedColor={Theme.color}
                      checked={selectedCheckbox === item.label}
                      onPress={() => handleCheckBoxPress(item.label)}
                    />
                  </TouchableOpacity>
                )}
                initialNumToRender={language.length}
              />
            </View>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Language;
