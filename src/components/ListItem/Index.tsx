import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useState } from "react";
import React from 'react'
import { style } from "./style";

const ListItem = ({title,subtitle}) => {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.subtitle}>{subtitle}</Text>
      </View>
      <Image style={style.arrow}source={require('../../assets/right-arrow.png')}/>
    </View>
  )
}
export default ListItem;