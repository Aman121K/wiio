import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import Images from '../../../Constant/Images';
import { FONTS } from '../../../Constant/fonts';
import { normalize, scaleWidth } from '../../../Constant/DynamicSize';
const style = StyleSheet.create({
  mainConatiner: {
    backgroundColor: '#0031CA',
    height: '100%',
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  textStyle: {
    fontFamily: FONTS.InterBold,
    fontSize: normalize(50),
    marginLeft: scaleWidth(10),
    color: 'white'
  }
})
const Splash = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      goTonextScreen()
    }, 2500)

  }, [])
  const goTonextScreen = () => {
    navigation.navigate('Welcome')
  }

  return (
    <SafeAreaView style={style.mainConatiner}>
      <View style={style.container}>
        <Image source={Images.WhiteLogo} />
        <Text style={style.textStyle}>Wiio</Text>
      </View>
    </SafeAreaView>

  )
}
export default Splash;
