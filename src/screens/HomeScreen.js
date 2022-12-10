import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import React, { useId, useState } from "react";
import { useUser } from "../context/userContext";
import { styles } from "../styles/stylesheet";
import { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { auth, database } from "../../firebase";
import { Alert } from "react-native";
import { onAuthStateChanged, signOut } from "firebase/auth";


export default function HomeScreen({ route, navigation }) {
    const { user } = route.params;
    const uid = user.uid;
    const [currentUser, setCurrentUser] = useState('');
    // setCurrentUser({ "uid" : uid, "nickname": currentUser[1]});
    useEffect(() => {

        const userRef = ref(database, 'users/' + uid);
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            setCurrentUser(data);
            console.log(currentUser)

        })

    }, []);
    function logOut() {

        signOut(auth).then(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                   
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    
                } else {
                    navigation.navigate('LoginScreen')
                    // ...
                }
            });
            // Sign-out successful.
        }).catch((error) => {
            Alert.alert("Error signing out!")
        });

    }
    return (
        <View
            style={styles.loginPageContainer}>
            <Text> Welcome, {currentUser.nickname}</Text>
            <Button
                buttonStyle={styles.loginButton}
                containerStyle={styles.loginButton}
                title="PLAY" onPress={() => navigation.navigate('GameScreen', { currentUser: currentUser })} />
            <Button style={styles.loginButton}
                containerStyle={styles.loginButton}
                title="LEADERBOARD" onPress={() => navigation.navigate('Leaderboard', { currentUser: currentUser })} />
            <Button style={styles.loginButton}
                containerStyle={styles.loginButton}
                title="LOG OUT" onPress={logOut} />

        </View>
    );
};
