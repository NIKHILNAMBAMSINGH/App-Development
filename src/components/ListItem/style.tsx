import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       padding:16,
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
        backgroundColor:colors.white,
        marginVertical:12,
        borderRadius:8,
    
    },
    title:{
    color:colors.blue,
    fontSize:18,
    fontWeight:'bold',
    },
    subtitle:{
      color:colors.grey,
      fontSize:12,
      marginTop:6,
    },
    arrow:{
            width:20,
            height:16,
            opacity: 0.6,

    },
    content:{

    },
})