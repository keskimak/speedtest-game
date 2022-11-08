import { View, Text} from "react-native";
import { Button } from "react-native-elements";


export default function HomeScreen({ route, navigation }) {
    const { user } = route.params;  

    return (

        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Welcome, {user.email}</Text>
                <Button title="PLAY" onPress={() => navigation.navigate('GameScreen')} />
                <Button title="SETTINGS" onPress={() => navigation.navigate('GameScreen')} />
        </View>
    );
};
