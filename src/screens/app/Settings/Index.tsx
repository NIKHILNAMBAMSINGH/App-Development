import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Index";
import { Style } from "./style";
import ListItem from "../../../components/ListItem/Index";
import EditableBox from "../../../components/EditableBox/Index";
import { useState } from "react";
import Button from "../../../components/Button/Button";

const Setting=({navigation})=>{
 const [editing,setEditing]=useState(false);
 const [values,setValues]=useState({name:'user',email:'nikhil@gmail.com'})

 const onEditPress=()=>{
  console.log("On Edit")
  setEditing(true);
 }

  const onSave=()=>{
  console.log("On Edit")
  setEditing(false);
 }

  const onItemPress=()=>{
    Linking.openURL('https://google.com');
  }

  const onChange=(key,value)=>{
    setValues(v=>({...v,[key]:value}))
  }
  console.log(values)
  const onBack=()=>{
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <Header showBack={true} onBackPress={onBack}title="Setting"></Header>
            <ScrollView style={Style.container}>
              <View style={Style.subtitleHeader}>
                <Text style={Style.sectionTitle}>Personal Information</Text>
                <Pressable onPress={onEditPress}>
 <Image style={Style.image}source={require('../../../assets/edit.png')}></Image>
                </Pressable>
              
              </View>
               <EditableBox textLabel="Name" onChangeText={(v)=>onChange('name',v)} value={values.name}></EditableBox>
               <EditableBox textLabel="Email" onChangeText={(v)=>onChange('email',v)}  value={values.email}></EditableBox>
               {editing?(<Button buttonStyle={Style.button} title="Save" onPress={onSave}></Button>):null

               }
               
              <Text style={[Style.sectionTitle,{marginTop:40}]}>Help Center</Text>
              <ListItem onPress={onItemPress} styles={Style.item}title="FAQ"></ListItem>
                    <ListItem onPress={onItemPress} styles={Style.item} title="Contact Us"></ListItem>
                    <ListItem onPress={onItemPress} styles={Style.item} title="Privacy & Security"></ListItem>
            </ScrollView>
    </SafeAreaView>
  )
   
}
export default Setting;