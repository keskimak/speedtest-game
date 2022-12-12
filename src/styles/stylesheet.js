import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({

    //Font styles
    basicFont: {
        color: '#8e44ad',
        fontSize: 35,
        letterSpacing: 3,
        marginBottom: 50,
        textShadowRadius: 10,
        textShadowColor: "#1abc9c"

    },

    input: {

        color: 'white',
        marginTop: 15,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
        width: Dimensions.get('window').width * 0.6,
    },
    register: {
        backgroundColor: '#1abc9c',
        color: 'white',
        fontSize: 22, fontWeight: '900'

    },

    //Login page
    loginPageContainer: {
        backgroundColor: '#FFCA3A',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,

    },

    loginInputContainer: {
        backgroundColor: '#FFCA3A',
        flex: 1,
        justifyContent: 'flex-start',
        width: Dimensions.get('window').width * 0.6,
        borderColor: "#8e44ad",
        borderRadius: 6,

    },
    loginButtonContainer: {
        backgroundColor: '#FFCA3A',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.5,

    },
    loginButton: {
        backgroundColor: '#FFCA3A',
        borderRadius: 1,
        borderColor: 'white',
        width: Dimensions.get('window').width * 0.6,
     
    },
    checkbox: {
        height: 50,
        marginVertical: 5,
        alignContent: "center",
        alignItems: 'center',
        flexWrap:'nowrap',
        backgroundColor: "#1abc9c",
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems:'center', alignSelf:'stretch',
    
    },

    //Home page
    homeContainer: {
        backgroundColor: '#FFCA3A',
        alignItems: 'center',
        justifyContent: 'center',

        flex: 1,

    },
    loginButtonContainer: {
        backgroundColor: '#FFCA3A',
        flex: 0,
        alignContent: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.5,

    },

    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonMain: {
        backgroundColor: '#FFCA3A',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
        width: Dimensions.get('window').width * 0.6,
        borderColor: "#8e44ad",
        borderRadius: 6,

    },

    buttonContainer: {
        width: Dimensions.get('window').width * 0.6,
        height: 50,
        marginVertical: 5,
        alignContent: "center",
        alignItems: 'center'
    },
    container: {

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    table: {
        flex: 1, marginBottom:150

    },
    tablehead: {
        marginTop:5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    tableButton: {

        width: Dimensions.get('window').width * 0.6,
        height: 50,
        marginVertical: 5,
        alignContent: "center",
        alignItems: 'center', 

    },



    //logo
    logo: {
        
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginTop: 80,
    
        resizeMode: 'cover',  
        padding:50,


    },
    //Shuttle
    shuttle: {
        
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginBottom:10,
        resizeMode: 'cover',  
        padding:50,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,


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
        row: { height: 35 },
        text: { textAlign: 'center', color: 'white', fontSize: 25 }


    },
    //Modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }


})

export { styles }