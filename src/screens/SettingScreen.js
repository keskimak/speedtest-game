import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import React from "react";
import { useState } from "react";
import { styles } from "../styles/stylesheet";
import saveNickname from "../utils/saveNickname";


export default function SettingScreen({ route, navigation }) {
    const { user } = route.params;
    const [nickname, setNickname] = useState('');
    const uid = user.uid;


    function saveSettings (uid, nickname) {

        saveNickname(uid, nickname);

    }



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
                <Button title="save" style={styles.button} onPress={saveSettings} />
     


            </View>
      
        </View>
    );
};
