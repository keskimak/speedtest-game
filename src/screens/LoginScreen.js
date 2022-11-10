import { KeyboardAvoidingView, Text, View, Alert } from "react-native";
import { Modal } from "react-native";
import React, { useState } from "react";
import { Button } from '@rneui/base';
import {  Input } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../styles/stylesheet";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { Dialog } from "react-native-elements";
import SaveUser from "../utils/saveUser";




export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //not in use atm    const [username, setUsername] = useState('');

   

    const handleLogin= () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigation.navigate('HomeScreen', { user: user });

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
                SaveUser(user);
             
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
                <Button title="login" style={styles.button} onPress={handleLogin} />
                <Button title="register" style={styles.button} onPress={handleSignUp} />


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

