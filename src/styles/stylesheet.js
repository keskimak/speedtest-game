import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    gameButtonsContainer: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    button1: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 50

    },
    button2: {
        alignItems: "center",
        backgroundColor: 'yellow',
        padding: 50

    },
    button3: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 50


    },
    button4: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 50

    },
    highlightedButton:{
        opacity:5

    }


})

export { styles }