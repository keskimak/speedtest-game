
import { auth, database } from "../../firebase";
import { View } from "react-native";
import { styles } from "../styles/stylesheet";
import { Image, Text } from "react-native-elements";
import { ListItem } from '@rneui/themed';
import React, { useEffect } from "react";
import { onValue, orderByChild, query, ref, snapshot } from "firebase/database";
import { SafeAreaView } from "react-native";
import TableComponent from "../components/TableComponent";
import { KeyboardAvoidingView } from "react-native";


export default function LeaderboardScreen({ route, navigation }) {

    const [scores, setScores] = React.useState([]);
    /*
        useEffect(() => {
            const itemsRef = ref(database, 'scores/');
            onValue(itemsRef, (snapshot) => {
                const data = snapshot.val();
                setScores(Object.values(data));
            })
        }, []);
    */




    //Show also users top scores? 

    return (
        <KeyboardAvoidingView style={styles.loginPageContainer}>
    

            <TableComponent />

        </KeyboardAvoidingView>
    )


};