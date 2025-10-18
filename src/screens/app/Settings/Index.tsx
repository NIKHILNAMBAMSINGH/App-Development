import { Linking, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Index";
import { Style } from "./style";
import ListItem from "../../../components/ListItem/Index";


const Setting=()=>{


  const onItemPress=()=>{
    Linking.openURL('https://google.com');
  }
  return (
    <SafeAreaView>
      <Header title="Setting"></Header>
            <ScrollView style={Style.container}>
              <Text style={Style.sectionTitle}>Help Center</Text>
              <ListItem onPress={onItemPress} styles={Style.item}title="FAQ"></ListItem>
                    <ListItem onPress={onItemPress} styles={Style.item} title="Contact Us"></ListItem>
                    <ListItem onPress={onItemPress} styles={Style.item} title="Privacy & Security"></ListItem>
            </ScrollView>
    </SafeAreaView>
  )
   
}
export default Setting;