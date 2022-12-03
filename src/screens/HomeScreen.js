import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import React, { useState } from "react";
import { useUser } from "../context/userContext";


export default function HomeScreen({ route, navigation }) {
    const { user }= route.params;
   
   
   
    return (
     <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Welcome, {user.email}</Text>
            <Button title="PLAY" onPress={() => navigation.navigate('GameScreen', { user: user })} />
            <Button title="Leaderboard" onPress={() => navigation.navigate('Leaderboard', { user: user })} />
            <Button title="SETTINGS" onPress={() => navigation.navigate('Settings', { user: user })} />
        </View> 
    );
};
