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
        backgroundColor: 'FFCA3A',
        flex: 0,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        width: Dimensions.get('window').width*0.6,
   
    },
    loginButtonContainer: {
        backgroundColor: '#FFCA3A',
        flex: 0,
        alignContent: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width*0.5,

    },
    loginButton: {
        backgroundColor: '#FFCA3A',
        borderRadius:1,
        borderColor:'white',
        width: Dimensions.get('window').width*0.6,
        marginBottom:10
        
    },
    //Text styles
    input : {
        color: 'white',
        fontSize: 20,

    },
    register: {
        backgroundColor: '#FFCA3A',
        color: 'white',
        fontSize: 28, 
        alignContent: 'center', 
        justifyContent: 'center'

    },

    //logo
    logo : {
       alignSelf: 'center', 
       justifyContent: 'flex-start'
    },
    //stars
    starlogo: {

        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,


    },

    scoretable: {

        container: { flex: 0, backgroundColor: '#FFCA3A' },
        wrapper: { flexDirection: 'row' },
        title: { flex: 1, backgroundColor: '#FFCA3A' },
        row: {  height: 35  },
        text: { textAlign: 'center', color:'white', fontSize:25 }
      

    }
      

})

export { styles }