import React from 'react'
import { Text, View } from 'react-native'
import { style } from './style'


const Seperator = ({text}:{text:string}) => {
  return (
    <View style={style.container}>
      <View style={style.line}></View>
        <Text style={style.text}>{text}</Text>
         <View style={style.line}></View>
    </View>
  )
}

export default Seperator