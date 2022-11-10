import { View, Text} from "react-native";
import { Button } from "react-native-elements";
import React from "react";


export default function Settings ({ route, navigation }) {
    const { user } = route.params;  
    const [alias, setAlias] = useState('');


    const saveSettings = () =>{

        // Save email, save aliasname
        
    }
    
    

    return (

        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Settings here</Text>
                <Button title="SAVE" onPress={saveSettings} />
     
        </View>
    );
};
