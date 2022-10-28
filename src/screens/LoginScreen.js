import { View, Text, StyleSheet } from "react-native";
import { KeyboardAvoidingView, Input, Button } from "react-native";
import React from "react";

import { initializeApp } from 'firebase/app';

import { GoogleAuthProvider, signInWithRedirect, getAuth, getRedirectResult, signInWithPopup } from "firebase/auth";
import { Alert } from "react-native";
import { firebaseConfig } from "../../firebase";


export default function LoginScreen() {



    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    const provider = new GoogleAuthProvider();

    const handleSignIn =()=> {
        signInWithRedirect(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          }
        )
    }




    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >

            <View style={styles.buttonContainer}>
                <Button title="login" style={styles.button} onPress={handleSignIn} />

            </View>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        width: 350
    },
    buttonContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        width: 250

    },
    button: {
        padding: 15,
        margin: 12

    }

})