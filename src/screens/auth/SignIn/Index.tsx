
import AuthHeader from "../../../components/AuthHeader/Index";
import Input from "../../../components/Input/Index";
import Checkbox from "../../../components/Checkbox/Index";
import Seperator from "../../../components/Seperator/Index";
import { style } from "./style";
import { Text, TouchableOpacity, View ,ScrollView} from 'react-native';
import { useState } from "react";
import Button from "../../../components/Button/Button";
import GoogleLogin from "../../../components/Google Login/Index";

const SignIn = ({navigation}) => {
  const [checked,setChecked]=useState(false)
   
  const onSignUp=()=>{
    navigation.navigate('SignUp')
  }
  const onBack=()=>{
     navigation.goBack();
  }

  return (
    <ScrollView style={style.container}>
      <AuthHeader onBackPress={onBack} title="Sign In" />

        <Input label="E-mail" placeholder="nambamnikhil8@gmail.com" />
          <Input isPassword={true} label="Password" placeholder="hello" />


          <Button title="Sign In" buttonStyle={style.button}></Button>
        <Seperator text="Or sign in with"/>
    
          <GoogleLogin />

        <Text style={style.footerText}>
          Don't have an account ?
          <Text onPress={onSignUp}style={style.footerLink}>Sign Up </Text>
        </Text>

    </ScrollView>
  );
};

export default SignIn;