import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import StyleOnboarding from '../style/StyleOnboarding';
import AppIntroSlider from 'react-native-app-intro-slider';
import { GO_TO_HOME } from '../function/NavigationNext';
import slides from '../item/ItemOnboarding';

const buttonlabel = (label) => {
    return (
        <View style={StyleOnboarding.button}>
            <Text style={StyleOnboarding.buttonText}>{label}</Text>
        </View>
    );
};
const Onboarding = ({ navigation }) => {
    const [showHomePage, setShowHomePage] = useState(false);
    const handleDone = () => {
        GO_TO_HOME(navigation);
    }
    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slides} // sử dụng hằng số từ file constants/OnboardingSlides.js
                renderItem={({ item }) => {
                    return (
                        <View style={StyleOnboarding.container}>
                            <Image source={item.image} style={StyleOnboarding.image} />
                            <View style={StyleOnboarding.textContainer}>
                                <Text style={StyleOnboarding.text}>{item.description}</Text>
                            </View>
                        </View>
                    )
                }}
                renderNextButton={() => buttonlabel('Next')}
                renderDoneButton={() => buttonlabel('Done')}
                onDone={handleDone}
                activeDotStyle={{
                    backgroundColor: '#FFB900',
                    width: 30,
                    // bottom: 110,
                    bottom: 80,
                }}
                dotStyle={{
                    backgroundColor: '#FFB900',
                    width: 10,
                    // bottom: 110,
                    bottom: 80,
                }}
            />
        )
    }
    return (
        <View style={StyleOnboarding.container}>
            <Text >Onboarding</Text>
        </View>
    );
};

export default Onboarding;
