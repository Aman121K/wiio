import React from 'react';
import { SafeAreaView, View } from 'react-native';
import AuthHeader from '../../../Component/AuthHeader';
import CustomButton from '../../../Component/CustomButton';
const Welcome = ({ navigation }) => {
    const onButtonClick = () => {
        navigation.navigate('Signin')
    }
    const restrictAccess = () => {

    }
    return (
        <SafeAreaView>
            <AuthHeader />
            <View>
                <CustomButton textColor="white" title="Click here to continue" bgColor="#0031CA" onButtonClick={onButtonClick} />
                <CustomButton title="Restrict access" onButtonClick={restrictAccess} bgColor="white" />
            </View>
        </SafeAreaView>
    )
}
export default Welcome;