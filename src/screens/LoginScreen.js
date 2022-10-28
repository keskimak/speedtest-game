import { View, Text, StyleSheet } from "react-native";
import { KeyboardAvoidingView, Input, Button } from "react-native";
import React from "react";
import { GoogleAuthProvider, signInWithRedirect, getAuth, getRedirectResult, signInWithPopup } from "firebase/auth";
import { Alert } from "react-native";
import { auth, provider } from "../../firebase";
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GameScreen from "./GameScreen";


export default function LoginScreen({ navigation }) {

    const Tab = createBottomTabNavigator();


//When logged in, the user is then taken to Homescreen. There the user can choose the function they want: play the game, see the leaderboard etc

// HandleSignIn does not work yet. 

/*
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


*/
//If logged in, then conditionally render Homescreen here. Now it shows the homescreen automatically
    return (
     <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('HomeScreen');
      }}
    />
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