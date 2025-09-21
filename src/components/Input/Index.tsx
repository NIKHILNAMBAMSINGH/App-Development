import { View, Text, TextInput } from "react-native";
import { style } from "./style";

const Input = ({ label,placeholder }: { label: string ,placeholder:string}) => {
  return (
    <View style={style.container}>
    <Text style={style.label}>{label}</Text>\
    <View style={style.inputContainer}>
          <TextInput style={style.input}>{placeholder}</TextInput>
    </View>
    </View>
  );
};

export default Input;