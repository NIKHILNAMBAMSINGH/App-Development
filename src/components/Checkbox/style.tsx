import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";
export const Styles=StyleSheet.create({
  container:{
    borderColor:colors.grey,
    borderWidth:1,
    borderRadius:4,
    width:22,
    height:22,
  },
  innerContainer:{
    backgroundColor:colors.grey,
     width:'100%',
     height:'100%',
     alignItems:'center',
     justifyContent:'center',
  },
    checkInBox:{
        width:12,
        height:9,
    }
})