import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../Constant/DynamicSize';
const style = StyleSheet.create({
    mainConatiner: {
        marginTop: scaleHeight(20),
        marginHorizontal: scaleWidth(20),
       
    },
    titleStyle: {

    },
    inputTextStyle: {
        marginLeft:scaleWidth(10)
    },
    inputTextConatiner: {
        flexDirection: 'row',
        marginTop: scaleHeight(10),
        padding:scaleHeight(10),
        backgroundColor: '#F5F5F5',
        borderRadius:scaleHeight(10)
     
    }
})
const InputText = ({ title, image, placholderText, onChangeText, value }) => {
    return (
        <View style={style.mainConatiner}>
            <Text style={style.titleStyle}>{title}</Text>
            <View style={style.inputTextConatiner}>
                <Image source={image} />
                <TextInput style={style.inputTextStyle} placeholder={placholderText} value={value} onChangeText={onChangeText} />
            </View>
        </View>
    )
}
export default InputText;