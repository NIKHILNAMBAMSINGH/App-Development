import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Index";
import { Style } from "./style";
import ListItem from "../../../components/ListItem/Index";
import EditableBox from "../../../components/EditableBox/Index";
import { useState } from "react";
import Button from "../../../components/Button/Button";

const CreateNewListing=({navigation})=>{

  const onBack=()=>{
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <Header showBack={true} onBackPress={onBack}title="Create a new Listing"></Header>
            <ScrollView style={Style.container}>
            <Text style={Style.sectionTitle}>Upload Photos</Text>
            </ScrollView>
    </SafeAreaView>
  )
   
}
export default CreateNewListing;