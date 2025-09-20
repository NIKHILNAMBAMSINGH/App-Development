import { StyleSheet } from "react-native";


export const style=StyleSheet.create({
    container: {
    padding: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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
        color:'#FCA34D',
        textDecorationLine:'underline',
    },
    footerText:{
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center",
        color:"#4F63AC",
        marginTop:30,
    }
})