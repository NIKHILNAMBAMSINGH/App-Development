import { View, Text, TextInput, Pressable, Image, TextInputProps, StyleProp, TextStyle } from "react-native";
import { style } from "./style";
import { useState } from "react";


const Input = ({ label, placeholder, isPassword,onChangeText,styles,value,...props }: { label: string; placeholder: string;styles?:any; isPassword?: boolean,onChangeText?:any;value?:any;}& TextInputProps) => {

  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyepress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <View style={style.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          value={value}
          onChangeText={onChangeText}
          style={[style.input,styles]}
          placeholder={placeholder} {...props}  
        />
        {isPassword ? (
          <Pressable onPress={onEyepress}>
            <Image
              style={style.eye}
              source={
                isPasswordVisible
                  ? require("../../assets/eye.png")
                  : require("../../assets/eye_closed.png")
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Input;