import { View, Text, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import React from "react";
import { useState } from "react";
import { styles } from "../styles/stylesheet";
import saveNickname from "../utils/saveNickname";
import { update, ref } from "firebase/database";
import { database } from "../../firebase";


export default function SettingScreen({ route, navigation }) {
    const { user } = route.params;
    const [nickname, setNickname] = useState('');
   



    return (
        <View style={styles.loginPageContainer}>
            <View style={styles.loginInputContainer}>
                <Text>Hello {user.email} set your nickname</Text>
                <Input
                    placeholder='nickname'
                    value={nickname}
                    onChangeText={nickname => setNickname(nickname.trim())}
                />

            </View>
            <View style={styles.loginButtonContainer}>
                <Button title="save" style={styles.button} onPress={saveNickname} />
     


            </View>
      
        </View>
    );
};
