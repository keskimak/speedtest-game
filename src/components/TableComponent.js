
import { styles } from '../styles/stylesheet';

import { auth, database } from "../../firebase";
import { View } from "react-native";
import { Icon, Image, Text } from "react-native-elements";
import { ListItem } from '@rneui/themed';
import React, { useEffect } from "react";
import { limitToFirst, onValue, orderByChild, orderByValue, query, ref, snapshot } from "firebase/database";
import Button from "react-native-flat-button";
import { KeyboardAvoidingView } from 'react-native';


const TableComponent = () => {

    const [scores, setScores] = React.useState([]);

    //personal best?? 
    /*
        useEffect(() => {
            const itemsRef = ref(database, 'scores/');
            onValue(itemsRef, (snapshot) => {
                const data = snapshot.val();
                setScores(Object.values(data));
            })
        }, []);
    */
    useEffect(() => {
        const myUserId = auth.currentUser.uid;
        const topResultReference = query(ref(database, 'users/'), orderByChild('bestresult'), limitToFirst(5));
        onValue(topResultReference, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setScores(Object.values(data));
            }

        })

    }, []);

    return (

        <KeyboardAvoidingView style={styles.homeContainer}>

            <View style={styles.table}>
                <View style={styles.tablehead}>
                    <Image source={require('./stars.png')} style={styles.starlogo} />
                    <Text style={styles.basicFont}>TOP SCORES</Text>
                </View>

                {
                    scores.map((item, i) => (
                        <ListItem
                        containerStyle={{backgroundColor: "#FFCA3A"}}
                              key={i} >
                                <Button
                                    type="custom"
                                    backgroundColor={"#1abc9c"}
                                    borderColor={"#8e44ad"}
                                    borderRadius={6}
                                    shadowHeight={8}
                                    activeOpacity={0.5}
                                    containerStyle={styles.tableButton}
                                    contentStyle={{ fontSize: 22, fontWeight: '900' }}
                                 
                                >  
                                    {item.nickname} {item.bestresult}
                                </Button>
                        
                        </ListItem>
                    ))
                }

            </View>
        </KeyboardAvoidingView>
    )

}



export default TableComponent;