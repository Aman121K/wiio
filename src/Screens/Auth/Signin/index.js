import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import AuthHeader from '../../../Component/AuthHeader';
import InputText from '../../../Component/InputText';
import CustomButton from '../../../Component/CustomButton';
import Images from '../../../Constant/Images';
import { scaleHeight } from '../../../Constant/DynamicSize';
const Signin = () => {
  return (
    <SafeAreaView>
      <AuthHeader />
      <View style={{ backgroundColor: 'white', height: '100%',marginTop:scaleHeight(20) }}>
        <InputText placholderText="tvikas6523@gmail.com" title="Email" image={Images.Email} />
        <InputText placholderText="*********" title="Senha" image={Images.Password} />
        <CustomButton textColor="white" title="Next" bgColor="#0031CA" />
      </View>
    </SafeAreaView>

  )
}
export default Signin;
