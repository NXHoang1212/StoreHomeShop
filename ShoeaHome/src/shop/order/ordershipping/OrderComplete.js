import { View, Text, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import StyleOrderComplete from '../../../style/StyleOrderComplete'
import ThemeContext from '../../../../config/context/ThemContext'

const OrderComplete = () => {
  const [OrderComplete, setOrderComplete] = useState([])
  const [isOrdervisible, setIsOrdervisible] = useState(false)
  const Theme = useContext(ThemeContext);


  if (OrderComplete.length === 0) {
    return (
      <View style={[StyleOrderComplete.container, { backgroundColor: Theme.displayColor, },
      { backgroundColor: isOrdervisible ? '#51565F' : Theme.displayColor }]}>
        <View style={StyleOrderComplete.viewheader}>
          <View style={StyleOrderComplete.viewimage}>
            <Image
              source={require('../../../../assets/images/noorder.png')}
              style={StyleOrderComplete.image}
            />
          </View>
          <View style={StyleOrderComplete.viewtext}>
            <Text style={StyleOrderComplete.text}>You don't have an order yet</Text>
            <Text style={StyleOrderComplete.text1}>You don't have an active order at this time</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={StyleOrderComplete.container}>
      <Text>OrderComplete</Text>
    </View>
  )
}

export default OrderComplete