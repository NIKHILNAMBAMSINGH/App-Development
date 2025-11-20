import { Alert, ScrollView, Text, View } from "react-native";
import { style } from "./style";
import AuthHeader from "../../../components/AuthHeader/Index";
import Input from "../../../components/Input/Index";
import Checkbox from "../../../components/Checkbox/Index";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import Seperator from "../../../components/Seperator/Index";
import GoogleLogin from "../../../components/Google Login/Index";
import { request } from "../../../utils/Request";


const Signup = ({navigation}) => {
const [checked,setChecked]=useState(false)
const [value, setValue] = useState({email: '' ,name: '',password:'',confirmPassword:''});
   
  const onSignIn=()=>{
   navigation.navigate('SignIn')
  }
  const onBack=()=>{
    navigation.goBack()
  }

  const onChange=(key,value)=>{
   console.log('Typed:', value);
    setValue(v=>({...v,[key]:value}));
  }

  const onSubmit=async ()=>{
    try{
if(!value?.name|| !value.email||!value.password||!value.confirmPassword){
      Alert.alert('All fields are mandatory')
      return
    }
    if(value?.password!==value?.confirmPassword){
      Alert.alert('Password do not match')
      return 
    }
    if(!checked){
      Alert.alert('Please agree to the term')
      return
    }
    const response=await request({
      url:'/registerUser',
      method:'post',
      data:value,
    });
     console.log('value : ==>',value);
    console.log('Response : ==>',response);
    }
    catch(error){
      console.log('error : ==> ', error);
    }
    
    
  }


  return (
    <ScrollView style={style.container}>
                    <AuthHeader onBackPress={onBack}title="Sign Up" />

                    <Input value={value.name} label="Name" onChangeText={v=>onChange('name',v)} placeholder="Name" />
                    <Input value={value.email} label="E-mail" onChangeText={v=>onChange('email',v)} placeholder="Email" />
                    <Input value={value.password} isPassword={true} label="Password" onChangeText={v=>onChange('password',v)} placeholder="Password" />
                      <Input value={value.confirmPassword} isPassword={true} label="Confirm Password" onChangeText={v=>onChange('confirmPassword',v)} placeholder="Confirm Password" />
                          <View style={style.agreeRow}>
                              <Checkbox checked={checked} onCheck={setChecked}/>
                              <Text style={style.agreeText}>I agree with <Text style={style.agreeTextBold}>Terms</Text> & <Text style={style.agreeTextBold}>Privacy</Text></Text>
                          </View>
          <Button title="Sign Up" onPress={onSubmit} buttonStyle={style.button}></Button>
        <Seperator text="Or sign up with"/>
    
          <GoogleLogin />

                  <Text style={style.footerText}>
                    Already have an account ?
                    <Text onPress={onSignIn}style={style.footerLink}>Sign in </Text>
        </Text>
    </ScrollView>
  );
};

export default Signup;