import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container:{
       flexDirection:'row',
       alignItems:"center",
       justifyContent:'space-between',
       paddingHorizontal:20,
    },
    icon:{
        width:24,
        height:24,
    },
    text:{
        fontWeight:'bold',
        color:colors.black,
        fontSize:16,
    },
    space:{
         width:24,
    }
})