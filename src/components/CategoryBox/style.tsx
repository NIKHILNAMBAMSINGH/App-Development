import { StyleSheet } from "react-native";
import { colors } from "../../utils/Color";

export const style=StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.grey,
    },
    imageContainer: {
        backgroundColor: colors.lightGrey,
       padding: 12,           // keep padding
        borderRadius: 12,      // slightly bigger radius than image
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 32,
        height: 32,
        borderRadius: 8,       // smaller than container, so background shows
    },
})