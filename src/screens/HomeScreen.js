import { View, Text} from "react-native";
import { Button } from "react-native-elements";
import React, { useState } from "react";


export default function HomeScreen({ route, navigation }) {
    const { user } = route.params;  
    const [alias, setAlias] = useState('');
    
    

    return (

        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Welcome, {user.email}</Text>
                <Button title="PLAY" onPress={() => navigation.navigate('GameScreen')} />
                <Button title="SET ALIAS" onPress={() => navigation.navigate('SettingScreen',  { user: user })} />
        </View>
    );
};
