import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import StyleWellCome from '../style/StyleWellCome'
import { GO_TO_ONBOARDING } from '../function/NavigationNext'

const WellCome = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            GO_TO_ONBOARDING(navigation);
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={StyleWellCome.container}>
            <Image style={StyleWellCome.image} source={require('../../assets/images/wellcome.png')} />
        </View>
    )
}

export default WellCome