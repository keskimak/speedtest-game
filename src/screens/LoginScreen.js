import { KeyboardAvoidingView, Text, View } from "react-native";
import React from "react";
import { Button, Input } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../styles/stylesheet";


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const Tab = createBottomTabNavigator();
    const handleLogin = () => {

        signInWithEmailAndPassword(auth, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                Alert.alert(user.email)
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
                Alert.alert(user.email)
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
                    onChangeText={email => setEmail(email)}
                />
                <Input
                    placeholder='Password'
                    value={password}
                    onChangeText={password => setPassword(password)}
                    secureTextEntry
                />


            </View>
            <View style={styles.loginButtonContainer}>
                <Button title="login" style={styles.button} onPress={handleLogin} />
                <Button title="register" style={styles.button} onPress={handleSignUp} />


            </View>
            <Button
                title="Go somewhere"
                onPress={() => {
                    // Navigate using the `navigation` prop that you received
                    navigation.navigate('HomeScreen');
                }}
            />
        </View>

    );
}

