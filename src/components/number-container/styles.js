import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 10,
        backgroundColor: 'red'
    },
    number:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})