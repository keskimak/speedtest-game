import { StyleSheet, Dimensions } from "react-native"




const styles = StyleSheet.create({

    //Login page
    loginPageContainer: {
        backgroundColor: '#FFCA3A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginInputContainer: {
        backgroundColor: '#FFCA3A',
        flex: 0,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        width: 350,
   
    },
    loginButtonContainer: {
        backgroundColor: '#FFCA3A',
        flex: 0,
        alignContent: 'center',
        justifyContent: 'center',
        width: 250

    },
    loginButton: {
        backgroundColor: '#FFCA3A',
        borderRadius:1,
        borderColor:'white',
        
    },
    //Text styles
    input : {
        color: 'white',
        fontSize: 20,

    },
    register: {
        backgroundColor: '#FFCA3A',
        color: 'white',
        fontSize: 28, alignContent: 'center', justifyContent: 'center'

    },

    //logo
    logo : {
       alignSelf: 'center', 
       justifyContent: 'flex-start'
    }



})

export { styles }