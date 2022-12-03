import { KeyboardAvoidingView, Text, View, Alert } from "react-native";
import { Modal } from "react-native";
import React, { useState } from "react";
import { Button } from '@rneui/base';
import { Input } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../styles/stylesheet";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import registerUser from "../utils/registerUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase";
import { useUser } from "../context/userContext";
import { useEffect } from "react";




export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

 
    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                
                setIsLoggedIn(true);
                navigation.navigate('HomeScreen', {user: user});
            

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorCode, errorMessage)
                // ...
            });
    }

    const handleSignUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                registerUser(user);

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorCode, errorMessage)
                // ..
            });
        setEmail('');
        setPassword('');
    }


    return (
        <View style={styles.loginPageContainer}>
            <View style={styles.loginInputContainer}>
                <Input
                    placeholder='Email'
                    value={email}
                    onChangeText={email => setEmail(email.trim())}
                />
                <Input
                    placeholder='Password'
                    value={password}
                    onChangeText={password => setPassword(password.trim())}
                    secureTextEntry
                />


            </View>
            <View style={styles.loginButtonContainer}>

                <Button title="login" onPress={handleLogin} />
                <Button title="register" onPress={handleSignUp} />


            </View>
            <Button
                title="Just play the game"
                onPress={() => {
                    // Navigate using the `navigation` prop that you received
                    navigation.navigate('GameScreen');
                }}
            />
        </View>

    );
}

