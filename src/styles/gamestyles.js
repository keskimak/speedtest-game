import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const gameStyles = StyleSheet.create({

    
    //Game screen
    gameButtonsContainer: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },

    //Buttons
    button1: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        borderRadius: 100,

    },
    button2: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 100,

    },
    button3: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        borderRadius: 100,


    },
    button4: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 100,

    },

    //Highlighted buttons

    lightButton1: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,

    },
    lightButton2: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,

    },
    lightButton3: {
        width: Dimensions.get('window').width*0.45,
        height: Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,

    },
    lightButton4: {
        width: Dimensions.get('window').width*0.45,
        height:Dimensions.get('window').width*0.45,
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,

    }


})


export { gameStyles }