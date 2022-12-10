import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const GameComponent = () => {

    return (
        <View>
            {highlight.isOn && highlight.button === 1 && gameGoingOn ?
                <TouchableOpacity activeOpacity={1.0} style={gameStyles.lightButton1} onPress={event => buttonPressed(event, 1)}><Text>3</Text></TouchableOpacity> :
                <TouchableOpacity activeOpacity={1.0} style={gameStyles.button1} onPress={event => buttonPressed(event, 1)}></TouchableOpacity>}

        </View>



    );
};

export default GameComponent;