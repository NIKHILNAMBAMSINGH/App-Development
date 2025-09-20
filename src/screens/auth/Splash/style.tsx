import { StyleSheet } from "react-native";
import { colors } from "../../../utils/Color";


export const style=StyleSheet.create({
    container: {
    padding: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
    image:{
        height:200,
        width:'100%',
    },
    titleContainer:{
        marginVertical:54,
    },
    title:{
        fontSize:40,
        fontFamily:'bold',
        textAlign:'center',
    },
    innerTitle:{
        color:colors.orange,
        textDecorationLine:'underline',
    },
    footerText:{
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center",
        color:colors.blue,
        marginTop:30,
    }
})