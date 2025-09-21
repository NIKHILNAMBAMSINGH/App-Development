import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";


export const style=StyleSheet.create({
    container:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20,
    },
    image:{
       width:18,
       height:18,
    },
    title:{
        color:colors.blue,
        fontSize:26,
        fontWeight:'500',
        paddingHorizontal:16,

    },

})