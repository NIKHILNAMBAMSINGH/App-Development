import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'


const Button = ({ title, buttonStyle, onPress}: { title: string; buttonStyle?: any, onPress?: () => void }) => {

  return (

    <TouchableOpacity activeOpacity={0.5} onPress={onPress}style={[style.container,buttonStyle]}>
        <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;