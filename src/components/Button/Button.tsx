import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from './style'


const Button = ({title}:{title:string}) => {

  return (

    <TouchableOpacity activeOpacity={1} style={style.container}>
        <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button