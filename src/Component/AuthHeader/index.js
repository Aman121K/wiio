import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import Images from "../../Constant/Images";
const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black'
    }
})
const AuthHeader = () => {
    return (
        <View style={style.mainContainer}>
            <View>
                <Image source={Images.WhiteLogo} />
                <Text>Welcome</Text>
                <Text>Let’s start to Scan</Text>
            </View>
            <Image source={Images.BlacklogoBg} />
        </View>
    )
}
export default AuthHeader;