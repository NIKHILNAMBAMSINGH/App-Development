import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useState } from "react";
import React from 'react'
import { style } from "./style";
import Input from "../Input/Index";


const EditableBox = ({textLabel,value,editable,onChangeText,styles}:{textLabel:any;value?:any,editable?:any,onChangeText?:any,styles?:any}) => {
  return (
    <View style={[style.container,styles]}>
        <Text style={style.label}>{textLabel}</Text>
        <TextInput editable={editable} style={style.input} onChangeText={onChangeText} value={value}></TextInput>
    </View>
  )
}
export default EditableBox;