import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container:{
     backgroundColor:colors.darkGrey,
     alignSelf:'center',
     width:'40%',
     justifyContent:'center',
     alignItems:'center',
     padding:16,
     borderRadius:14,
    },
    image:{
      width:30,
      height:30,
    }
})