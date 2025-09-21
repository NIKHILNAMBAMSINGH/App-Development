import { View, Text, TextInput, Pressable } from "react-native";
import { style } from "./style";
import { useState } from "react";
import { Image } from "react-native";

const Input = ({ label,placeholder,isPassword }: { label: string ,placeholder:string,isPassword?:boolean}) => {

    const [isPasswordVisible,setIsPasswordVisible]=useState(false)

    const onEyepress=()=>{
        setIsPasswordVisible(!isPasswordVisible);
    }

  return (
    <View style={style.container}>
    <Text style={style.label}>{label}</Text>\
    <View style={style.inputContainer}>
          <TextInput secureTextEntry={isPassword && !isPasswordVisible} style={style.input}>{placeholder}</TextInput>
          {
            isPassword?(
 <Pressable onPress={onEyepress}>
<Image style={style.eye} 
    source={isPasswordVisible?require('../../assets/eye.png'):require('../../assets/eye_closed.png')}></Image>
          </Pressable>
            ):null
          }
    </View>
    </View>
  );
};

export default Input;