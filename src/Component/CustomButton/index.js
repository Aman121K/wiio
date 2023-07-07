import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { normalize, scaleHeight } from '../../Constant/DynamicSize';
import { FONTS } from '../../Constant/fonts';
const style = StyleSheet.create({
    mainConatiner: {
        padding: scaleHeight(10),
        alignItems: 'center',
        marginTop:scaleHeight(10),
        borderRadius:scaleHeight(10),
        width:'90%',
        alignSelf:'center',
    },
    titleStyle: {
        fontFamily: FONTS.InterRegular,
        fontSize: normalize(20)
    }
})

const CustomButton = ({ title, onButtonClick, bgColor, textColor }) => {
    return (
        <TouchableOpacity style={[style.mainConatiner, { backgroundColor: bgColor }]} onPress={onButtonClick}>
            <Text style={[style.titleStyle, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton