import { View, Text, Button } from "react-native";


export default function HomeScreen({ navigation }) {

    return (

        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> This is the screen Homescreen</Text>
            <Text>Play the game</Text><Button title="GameScreen" onPress={() => navigation.navigate('GameScreen')} />
        </View>
    );
};
