
import { auth, database } from "../../firebase";
import { View } from "react-native";
import { styles } from "../styles/stylesheet";
import { Text } from "react-native-elements";
import { ListItem } from '@rneui/themed';
import React, { useEffect } from "react";
import { onValue, ref, snapshot } from "firebase/database";
import { SafeAreaView } from "react-native";


export default function LeaderboardScreen({ route, navigation }) {

    const [scores, setScores] = React.useState([]);

    useEffect(() => {
        const itemsRef = ref(database, 'scores/');
        onValue(itemsRef, (snapshot) => {
            const data = snapshot.val();
            setScores(Object.values(data));
        })
    }, []);

    //Leaderboard working but there are no results yet

    return (
        <SafeAreaView style={styles.loginPageContainer}>
            <Text>Top scores</Text>
            {
                scores.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Title>Result</ListItem.Title>
                        <ListItem.Subtitle>{item.result}</ListItem.Subtitle>
                  
                    </ListItem>
                ))
            }
        </SafeAreaView>
    )


};