import { StyleSheet, Dimensions } from "react-native"




const styles = StyleSheet.create({



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
        width: Dimensions.get('window').width*0.4,
        height: Dimensions.get('window').width*0.4,
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,

    },
    lightButton2: {
        width: Dimensions.get('window').width*0.4,
        height: Dimensions.get('window').width*0.4,
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,

    },
    lightButton3: {
        width: Dimensions.get('window').width*0.4,
        height: Dimensions.get('window').width*0.4,
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,

    },
    lightButton4: {
        width: Dimensions.get('window').width*0.4,
        height: Dimensions.get('window').width*0.4,
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,

    },

 
    //
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

    //Delete when highlights work
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
      },


})

export { styles }