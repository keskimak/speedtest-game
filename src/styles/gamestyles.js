import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const gameStyles = StyleSheet.create({

    
    //Game screen
    gameButtonsContainer: {
        backgroundColor: '#FFCA3A',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },

    //Buttons

    gameButton: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: '#8e44ad',
        padding: 10,
        borderRadius: 100,

    },
    highlightedButton: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: "#1abc9c",
        padding: 10,
        borderRadius: 100,

    },
    


})


export { gameStyles }