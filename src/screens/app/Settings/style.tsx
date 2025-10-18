import { StyleSheet } from "react-native";
import { colors } from "../../../utils/Color";

export const Style=StyleSheet.create({
  sectionTitle:{
    fontWeight:'500',
    fontSize:16,
    color:colors.grey,
    marginBottom:16,
  },
  container:{
   padding:24,

  },
  item:{
  paddingVertical:8,
  paddingHorizontal:16,
  marginVertical:8,
  }
}
)