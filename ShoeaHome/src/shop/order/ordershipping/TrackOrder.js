import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { HOST } from '../../../../config/Constant'
import AxiosInstance from '../../../../config/context/AxiosIntance'
import { getUserId } from '../../../../config/service/Utils'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleTrackOrder from '../../../style/styleOrder/StyleTrackOrder'
import { GO_BACK } from '../../../function/NavigationNext'

const TrackOrder = ({ navigation }) => {
  return (
    <View style={StyleTrackOrder.container}>
      <View style={StyleTrackOrder.header}>
        <TouchableOpacity style={StyleTrackOrder.iconleft} onPress={() => GO_BACK(navigation)}>
          <Icon name="arrow-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={StyleTrackOrder.title}>Track Order</Text>
        <Icon name="dots-horizontal-circle-outline" size={28} color="#000" style={StyleTrackOrder.iconright} />
      </View>
    </View>
  )
}

export default TrackOrder