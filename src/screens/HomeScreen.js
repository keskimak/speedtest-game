import { View, Text, KeyboardAvoidingView, Dimensions } from "react-native";
import React, { useId, useState } from "react";
import { styles } from "../styles/stylesheet";
import { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { auth, database } from "../../firebase";
import { Alert } from "react-native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Button from "react-native-flat-button";
import { Avatar, Image } from "react-native-elements";



export default function HomeScreen({ navigation }) {
    const uid = auth.currentUser.uid;
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

                navigation.navigate('LoginScreen')

            });
        }).catch((error) => {
            Alert.alert("Error signing out!")
        });

    }
    return (
        <KeyboardAvoidingView style={styles.homeContainer}>

            <View style={styles.buttonMain}>
                <View style={styles.header}>              
                  
                    <Image source={require('../components/raketti.png')} style={styles.shuttle} />
                    <Text style={styles.basicFont}>WELCOME, {currentUser.nickname}!</Text>
                    <Button
                        type="custom"
                        backgroundColor={"#1abc9c"}
                        borderColor={"#8e44ad"}
                        borderRadius={6}
                        shadowHeight={8}
                        activeOpacity={0.5}
                        containerStyle={styles.buttonContainer}
                        contentStyle={{ fontSize: 22, fontWeight: '900' }}
                        onPress={() =>
                            navigation.navigate('GameScreen')}
                    >
                        PLAY
                    </Button>
                    <Button
                        type="custom"
                        backgroundColor={"#1abc9c"}
                        borderColor={"#8e44ad"}
                        borderRadius={6}
                        shadowHeight={8}
                        activeOpacity={0.5}
                        containerStyle={styles.buttonContainer}
                        contentStyle={{ fontSize: 22, fontWeight: '900' }}
                        onPress={() =>
                            navigation.navigate('Leaderboard')}
                    >
                        LEADERBOARD
                    </Button>
                    <Button
                        type="custom"
                        backgroundColor={"#1abc9c"}
                        borderColor={"#8e44ad"}
                        borderRadius={6}
                        shadowHeight={8}
                        activeOpacity={0.5}
                        containerStyle={styles.buttonContainer}
                        contentStyle={{ fontSize: 22, fontWeight: '900' }}
                        onPress={logOut}
                    >
                        LOGOUT
                    </Button>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
};
// <Avatar rounded icon={{ name: 'home', color: "#1abc9c" }} s size="xlarge" />