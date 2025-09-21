import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container:{
        marginBottom:20,
    },
    label:{
      
       marginBottom:8,
       color:colors.blue,
       fontWeight:"500",
       fontSize:14,

    },
    inputContainer:{
     borderWidth:1,
     borderColor:colors.grey,
     borderRadius:14,
     alignItems:'center',
     flexDirection:'row',
    },
    input:{
        paddingHorizontal:16,
        paddingVertical:20,
        flex:1,
    },
    eye:{
        width:24,
        height:24,
        marginHorizontal:16,

    }
})