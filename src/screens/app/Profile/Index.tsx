import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Style } from "./style";
import Header from "../../../components/Header/Index";
import ListItem from "../../../components/ListItem/Index";
import Button from "../../../components/Button/Button";

const ProfileScreen=({navigation})=>{
    const num=10;

    const onLogout=()=>{
        console.log('Log out clicked')
    }

    const onSettingPress=()=>{
       navigation.navigate('Setting')
    }
   return (
      <SafeAreaView style={{flex:1}} >
        <Header title="Profile" showLogout onLogout={onLogout}></Header>
          <View style={Style.container}>
            <View style={Style.content}>
                <Text style={Style.name}>User name</Text>
                <Text style={Style.email}>User email</Text>
                    <ListItem title="My Listing" subtitle={`You have ${num} listings`}></ListItem>    
                    <ListItem  onPress={onSettingPress}title="Setting" subtitle={`Account,FAQ,Contact`}></ListItem>  
            </View>
            <Button  buttonStyle={{flex:0}} title="Add New Listing"></Button>
                
          </View>
      </SafeAreaView>
    );
}
export default ProfileScreen;