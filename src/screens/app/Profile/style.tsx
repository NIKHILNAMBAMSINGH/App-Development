import { StyleSheet } from "react-native";
import { colors } from "../../../utils/Color";

export const Style=StyleSheet.create({
 container:{
    padding:24,
    flex:1,
 },
 name:{
   fontSize:20,
   fontWeight:'bold',
   color:colors.black,
   marginBottom:12,
 },
 email:{
   fontSize:14,
   color:colors.grey,
 },
 content:{
   flex:1,
 },
}
)