import { View, Text, TouchableOpacity, PermissionsAndroid, Modal, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import StyleAddNewress from '../../../style/styleAddresses/StyleAddNewRess';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GO_BACK } from '../../../function/NavigationNext';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import { CheckBox } from 'react-native-elements';
import { HOST } from '../../../../config/Constant';
import AxiosInstance from '../../../../config/context/AxiosIntance';
import { getUserId } from '../../../../config/service/Utils';
import ThemeContext from '../../../../config/context/ThemContext';

const AddNewRess = ({ navigation, route }) => {
  const { address } = route.params;
  const [mLat, setMLat] = useState(0);
  const [mLong, setMLong] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const Theme = useContext(ThemeContext);
  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    if (address) {
      setAddressLine1(address.addressLine1);
      setAddressLine2(address.addressLine2);
    }
  }, [address]);
  // hàm cập nhật địa chỉ mới swipelisview xoá và cập nhật
  const handleUpdateAddress = async () => {
    try {
      const userId = await getUserId();
      const newAddress = {
        addressId: address.addressId,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        isDefault: isChecked,
      };
      const response = await AxiosInstance().post(`address/${userId}/updateAddress`, newAddress);
      console.log('response', response);
      navigation.goBack();
    } catch (error) {
      console.log('Lỗi khi cập nhật địa chỉ mới:', error);
    }
  };
  // hàm thêm địa chỉ mới
  const handleAddNewAddress = async () => {
    try {
      const userId = await getUserId();
      const newAddress = {
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        isDefault: isChecked,
      };
      const response = await AxiosInstance().post(`address/${userId}/addUserAddress`, newAddress);
      console.log('response', response);
      navigation.goBack();
    } catch (error) {
      console.log('Lỗi khi thêm địa chỉ mới:', error);
    }
  };
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location in order to function properly.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    requestLocationPermission();
  }, []);
  // lấy vị trí hiện tại
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setMLat(position.coords.latitude);
        setMLong(position.coords.longitude);
        getAddressFromLatLng(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
  // lấy địa chỉ từ vị trí hiện tại
  const getAddressFromLatLng = async (lat, lng) => {
    const apiKey = "AIzaSyDFPSKwgFMBgSA0NjWimRQhF0l-IDs_fe4";
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
      );
      const json = await response.json();
      console.log(json);
      const addressComponents = json.results[0].address_components;
      const formattedAddress = createFormattedAddress(addressComponents);
      setAddressLine2(formattedAddress.streetNumber + ' ' + formattedAddress.street + '' + formattedAddress.district + ',' + formattedAddress.city);
    } catch (error) {
      console.log('Lỗi khi lấy địa chỉ từ vị trí hiện tại:', error);
    }
  }
  // lấy vị trí theo tên thành phố đường muốn hiện ra 
  const createFormattedAddress = (addressComponents) => {
    let streetNumber = '';
    let street = '';
    let district = '';
    let city = '';
    let country = ''; // Thêm biến quốc gia

    for (let i = 0; i < addressComponents.length; i++) {
      const component = addressComponents[i];
      if (component.types.includes('street_number')) {
        streetNumber = component.long_name;
      }
      if (component.types.includes('route')) {
        street = component.long_name;
      }
      if (component.types.includes('sublocality_level_1')) {
        district = component.long_name;
      }
      if (component.types.includes('locality')) {
        city = component.long_name;
      }
      if (component.types.includes('country')) {
        country = component.long_name; // Lưu giá trị quốc gia
      }
    }
    console.log(`${streetNumber}, ${street}, ${district}, ${city}, ${country}`);
    return { streetNumber, street, district, city, country };
  };

  return (
    <View style={[StyleAddNewress.container, { backgroundColor: Theme.backgroundColor }]}>
      <ScrollView>
        <View style={[StyleAddNewress.body, { backgroundColor: Theme.backgroundColor, }]}>
          <View style={StyleAddNewress.viewheader}>
            <TouchableOpacity onPress={() => GO_BACK(navigation)}>
              <Icon name="arrow-left" size={28} style={[StyleAddNewress.iconback, { color: Theme.color }]} />
            </TouchableOpacity>
            <Text style={[StyleAddNewress.textheader, { color: Theme.color }]}>Add New Address</Text>
            <TouchableOpacity >
              <View style={StyleAddNewress.viewiconother}>
                <Icon name="dots-horizontal-circle-outline" size={28} style={[{ color: Theme.color }]} />
              </View>
            </TouchableOpacity>
          </View>
          <View >
            <MapView
              style={[{ width: '100%', height: 350 }]}
              showsUserLocation
              initialRegion={{
                latitude: 10.831459,
                longitude: 106.630019,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              onRegionChange={x => {
                console.log(x)
              }}>
              <Marker coordinate={{ latitude: mLat, longitude: mLong }} />
            </MapView>
            <View style={[StyleAddNewress.viewbody, { backgroundColor: Theme.backgroundColor, }]}>
              <View style={StyleAddNewress.lineShort} />
              <View style={StyleAddNewress.titlebody}>
                <Text style={[StyleAddNewress.texttitlebody, { color: Theme.color }]}>Address Details</Text>
              </View>
              <View style={StyleAddNewress.lineShort2} />
              <View style={StyleAddNewress.viewinput}>
                <Text style={[StyleAddNewress.textinput, { color: Theme.color }]}>Name Address</Text>
                <View style={[StyleAddNewress.viewinput2, { backgroundColor: Theme.backgroundBorder, }]}>
                  <TextInput
                    style={[StyleAddNewress.textinputview, { color: Theme.color }]}
                    placeholderTextColor='#DFDFDF'
                    placeholder="Name Address"
                    value={addressLine1}
                    onChangeText={setAddressLine1}
                  />
                </View>
              </View>
              <View style={StyleAddNewress.viewinput}>
                <Text style={[StyleAddNewress.textinput, { color: Theme.color }]}>Address Details</Text>
                <View style={[StyleAddNewress.viewinput3, { backgroundColor: Theme.backgroundBorder }]}>
                  <TextInput
                    style={[StyleAddNewress.textinputview2, { color: Theme.color }]}
                    placeholderTextColor='#DFDFDF'
                    placeholder="Address Details"
                    value={addressLine2}
                    onChangeText={setAddressLine2}
                  />
                  <TouchableOpacity onPress={() => { getCurrentLocation() }}>
                    <Icon name="map-marker-outline" size={22} color="#393939" style={[StyleAddNewress.iconaddress, { color: Theme.color }]} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <CheckBox
                  title='Make this as the default address'
                  checked={isChecked}
                  onPress={handleCheckBoxToggle}
                  containerStyle={StyleAddNewress.checkbox}
                  textStyle={[StyleAddNewress.textcheckbox, { color: Theme.color }]}
                  checkedColor={Theme.color}
                  uncheckedColor={Theme.color}
                />
                <View style={{ gap: 15 }}>
                  <TouchableOpacity style={[StyleAddNewress.viewlocation, { backgroundColor: Theme.backgroundCheckOut }]}
                    onPress={handleAddNewAddress}>
                    <Text style={[StyleAddNewress.textlocation, { color: Theme.colorTextWhiteBlack }]}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[StyleAddNewress.viewlocation, { backgroundColor: Theme.backgroundCheckOut }]}
                    onPress={handleUpdateAddress}>
                    <Text style={[StyleAddNewress.textlocation, { color: Theme.colorTextWhiteBlack }]}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView >
    </View >
  )
}

export default AddNewRess