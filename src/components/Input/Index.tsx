import { View, Text, TextInput, Pressable, Image, TextInputProps, StyleProp, TextStyle, Modal, TouchableOpacity } from "react-native";
import { style } from "./style";
import { useState } from "react";


const Input = ({ label, placeholder,type,options,isPassword,onChangeText,styles,value,...props }: { label: string; placeholder: string;options?:any;styles?:any; isPassword?: boolean,onChangeText?:any;value?:any;type?:any}& TextInputProps) => {

  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible,setIsPickerModalVisible]=useState(false);

  const onEyepress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSelect=(opt)=>{
     onChangeText(opt);
     setIsPickerModalVisible(false);
  }

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      {type==='picker'? (
      
        <Pressable style={style.inputContainer} onPress={()=>setIsPickerModalVisible(true)}>
          {
            value?(
   <Text style={[style.input,styles]}>{value?.title}</Text>
                          
            ):( 
                 <Text style={[style.placeholderStyle,styles]}>{placeholder}</Text>
                        
            )
          }
              <Image style={style.arrow} source={require("../../assets/right-arrow.png")}/>
             </Pressable>
      ):(

        
    <View style={style.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isPasswordVisible} value={value} onChangeText={onChangeText} style={[style.input,styles]}placeholder={placeholder} {...props}  
        />
        {isPassword ? (
              <Pressable onPress={onEyepress}><Image style={style.eye}source={  isPasswordVisible ? require("../../assets/eye.png") :require("../../assets/eye_closed.png")}/>
          </Pressable>
        ) : null}
      </View>
      )}

      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity activeOpacity={1} onPress={()=>setIsPickerModalVisible(false)} style={style.modelWrapper}>
          <TouchableOpacity activeOpacity={1} style={style.modelContent}>

                 <Text style={style.headerTitle}>Select options</Text>

                 {options?.map(opt=>{
                  if(!opt?.id){
                    return null
                  }

                  const selected=value?.id===opt?.id;
                  return (
                      <Text  onPress={()=>onSelect(opt)} style={[style.optionText,selected?style.selectedOption:{}]}key={opt?.title}>{opt?.title}</Text>
                  )
                 })

                 }
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Input;