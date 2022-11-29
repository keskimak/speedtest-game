import { View, Text, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import React from "react";
import { useState } from "react";
import { styles } from "../styles/stylesheet";
import { update, ref, set } from "firebase/database";
import { database } from "../../firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function SettingScreen({ route, navigation }) {
//Now the user is brought from User authentication = only uid and email. Snapshot of the table users will give the info about other things. 
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    const { user } = route.params;
    const currentNickname = user.nickname;
    const [nickname, setNickname] = useState('');
    const saveNickname = () => {
        try {
            update(ref(database, "users/" + user.uid), {
                nickname: nickname,
            });
        } catch (error) {
            Alert.alert(error)
        }

    }



//Add update email function? How about uploading avatar? 


    return (
        <View style={styles.loginPageContainer}>
            <View style={styles.loginInputContainer}>
                <Text>Hello {user.email} set your nickname. Current nickname = {currentNickname}</Text>
                <Input
                    placeholder='nickname'
                    value={nickname}
                    onChangeText={nickname => setNickname(nickname.trim())}
                />

            </View>
            <View style={styles.loginButtonContainer}>
                <Button title="save" style={styles.button1} onPress={saveNickname} />
             
            </View>

        </View>
    );
};
