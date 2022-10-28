import { View, Text, Button } from "react-native";
import { createArray } from "../hooks/CreateArray";


export default function GameScreen({ navigation }) {

    const startGame = () => {
        createArray(300)
      
    }



    return (

        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="New game" onPress={startGame} />
        </View>
    );
};
