import { Text, View } from "react-native";
import { style } from "./style";
import AuthHeader from "../../../components/AuthHeader/Index";
import Input from "../../../components/Input/Index";
import Checkbox from "../../../components/Checkbox/Index";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import Seperator from "../../../components/Seperator/Index";

const Signup = () => {
  const [checked,setChecked]=useState(false)
  return (
    <View style={style.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Nikhil Nambam" />
        <Input label="E-mail" placeholder="nambamnikhil8@gmail.com" />
          <Input isPassword={true}label="Password" placeholder="hello" />
          <View style={style.agreeRow}>
               <Checkbox checked={checked} onCheck={setChecked}/>
               <Text style={style.agreeText}>I agree with <Text style={style.agreeTextBold}>Terms</Text> & <Text style={style.agreeTextBold}>Privacy</Text></Text>
          </View>
          <Button title="Sign Up" buttonStyle={style.button}></Button>
        <Seperator text="Or sign up with"/>
    </View>
  );
};

export default Signup;