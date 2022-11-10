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
    highlightedButton: {
        opacity: 5

    },
    loginPageContainer: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginInputContainer: {
        marginTop:200,
        flex: 0,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        width: 350
    },
    loginButtonContainer: {
        flex: 0,
        alignContent: 'center',
        justifyContent: 'center',
        width: 250

    },


})

export { styles }