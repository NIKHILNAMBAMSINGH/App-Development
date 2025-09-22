import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container:{
    alignItems:'center',
    flexDirection:'row',
    marginVertical:20,
    },
    text:{
        alignItems:'center',
        color:colors.blue,
        fontWeight:'500'
    },
    line:{
        backgroundColor:colors.lightGrey,
        height:2,
        flex:1,
        marginHorizontal:8,
        
    }
})