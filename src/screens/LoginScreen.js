import { KeyboardAvoidingView, Text, View, Alert, Image } from "react-native";
import React, { useState } from "react";
import { Button, CheckBox, Icon } from '@rneui/base';
import { Input } from "react-native-elements";
import { styles } from "../styles/stylesheet";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { app, auth, database } from "../../firebase";
import registerUser from "../utils/registerUser";
import { useEffect } from "react";


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [registering, setRegistering] = useState(false);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

    }, []);


    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('HomeScreen', { user: user });
                setEmail('');
                setPassword('');
                setNickname('');
            })
            .catch((error) => {
                Alert.alert("Error occured when logging in")
            });
    }
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                registerUser(user, nickname)

                navigation.navigate('HomeScreen', { user: user });
            })
            .catch((error) => {
                Alert.alert(error.code, error.message)
            });
        setEmail('');
        setPassword('');
        setNickname('');
    }
    return (
        <KeyboardAvoidingView style={styles.loginPageContainer}>
            <Image source={require('../components/raketti.png')} style={styles.logo} />
            <View style={styles.loginInputContainer}>
                <Input
                    inputStyle={styles.input}
                    placeholderTextColor="white"
                    inputContainerStyle={{ borderBottomColor: "white" }}
                    autoComplete="email"
                    placeholder='Email'
                    value={email}
                    onChangeText={email => setEmail(email.trim())}
                />
                <Input
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder='Password'
                    inputContainerStyle={{ borderBottomColor: "white" }}
                    value={password}
                    onChangeText={password => setPassword(password.trim())}
                    secureTextEntry
                />
                {registering ?
                    <Input
                        style={styles.input}
                        placeholder='Nickname'
                        placeholderTextColor="white"
                        inputContainerStyle={{ borderBottomColor: "white" }}
                        value={nickname}
                        onChangeText={nickname => setNickname(nickname.trim())}
                    /> : <></>}

            </View>
            <View style={styles.loginButtonContainer}>
                {!registering ? <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={styles.loginButton}
                    icon={
                        <Icon
                            name="login"
                            type="material"
                            size={50}
                            color="white"
                        />
                    }
                    iconRight
                    onPress={handleLogin} />
                    : <Button buttonStyle={styles.loginButton} icon={
                        <Icon
                            name="login"
                            type="material"
                            size={50}
                            color="white"
                        />
                    } onPress={handleSignUp} />}
                <CheckBox
                    containerStyle={styles.register}
                    textStyle={styles.register}
                    center

                    checkedColor="white"
                    uncheckedColor="white"
                    title="register"
                    checked={registering}
                    onPress={registering ? registering => setRegistering(!registering)
                        : registering => setRegistering(registering)}
                />
            </View>
        </KeyboardAvoidingView>

    );
}

