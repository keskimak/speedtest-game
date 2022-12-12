import { KeyboardAvoidingView, Text, View, Alert, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { CheckBox, Icon } from '@rneui/base';
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
import Button from "react-native-flat-button";


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [registering, setRegistering] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('HomeScreen');
            }
        });

    }, []);

    //Old user
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('HomeScreen');
                setEmail('');
                setPassword('');
                setNickname('');
            })
            .catch((error) => {
                signOut(auth).then(() => {
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            Alert.alert('Error while logging in!')
                        } else {
                            navigation.navigate('LoginScreen')
                        }
                    });
                }).catch((error) => {
                    Alert.alert("Error signing in!")
                });

            });
    }
    //New user
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
        <View style={styles.loginPageContainer}> 
    
            <View style={styles.loginInputContainer}>
            <Image source={require('../components/speedtest.png')} style={styles.logo} />
               
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Input
                        inputStyle={styles.input}
                        placeholderTextColor="white"
                        inputContainerStyle={{ borderBottomColor: "white" }}
                        placeholder='EMAIL'
                        value={email}
                        autoFocus
                        onChangeText={email => setEmail(email.trim())}
                    />
                    <Input
                        style={styles.input}
                        placeholderTextColor="white"
                        placeholder='PASSWORD'
                        inputContainerStyle={{ borderBottomColor: "white", flexWrap: 'wrap' }}
                        value={password}
                        onChangeText={password => setPassword(password.trim())}
                        secureTextEntry
                    />
                    {registering ?
                        <Input
                            style={styles.input}
                            placeholder='NICKNAME'
                            placeholderTextColor="white"
                            inputContainerStyle={{ borderBottomColor: "white" }}
                            value={nickname}
                            onChangeText={nickname => setNickname(nickname.trim())}
                        /> : <></>}
                </View>
                <View style={{ flex: 1 }}>

                    {!registering ?

                        <Button
                            type="custom"
                            backgroundColor={"#1abc9c"}
                            borderColor={"#8e44ad"}
                            borderRadius={6}
                            shadowHeight={8}
                            activeOpacity={0.5}
                            containerStyle={styles.buttonContainer}
                            contentStyle={{ fontSize: 22, fontWeight: '900' }}
                            onPress={handleLogin} >LOGIN
                        </Button>
                        :
                        <Button
                            type="custom"
                            backgroundColor={"#1abc9c"}
                            borderColor={"#8e44ad"}
                            borderRadius={6}
                            shadowHeight={8}
                            activeOpacity={0.5}
                            containerStyle={styles.buttonContainer}
                            contentStyle={{ fontSize: 22, fontWeight: '900' }}
                            onPress={handleSignUp} >
                            REGISTER
                        </Button>}

                    <Button
                        type="custom"
                        shadowHeight={0}
                        backgroundColor={"#1abc9c"}
                        borderRadius={6}
                        containerStyle={styles.checkbox}
                        contentStyle={{ fontSize: 22, fontWeight: '900' }} >
                
                        <CheckBox
                            containerStyle={styles.checkbox}
                            textStyle={{ fontSize: 22, fontWeight: '900', color:'white' }}
                            center
                            title={'REGISTER?'}
                            checkedColor="white"
                            uncheckedColor="white"
                            size={28}
                            checked={registering}
                            onPress={registering ? registering => setRegistering(!registering)
                                : registering => setRegistering(registering)}
                        />
                         
                    </Button>
                </View>
            </View>
        </View>
    );
}

