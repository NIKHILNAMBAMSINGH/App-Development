import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'


const Button = ({ title, buttonStyle }: { title: string; buttonStyle?: any }) => {

  return (

    <TouchableOpacity activeOpacity={0.5} style={[style.container,buttonStyle]}>
        <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;