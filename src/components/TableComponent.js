
import { styles } from '../styles/stylesheet';

import { auth, database } from "../../firebase";
import { View } from "react-native";
import { Image, Text } from "react-native-elements";
import { ListItem } from '@rneui/themed';
import React, { useEffect } from "react";
import { limitToFirst, onValue, orderByChild, orderByValue, query, ref, snapshot } from "firebase/database";



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
        const topResultReference = query(ref(database, 'scores/'),  orderByChild('result'), limitToFirst(5));
        onValue(topResultReference, (snapshot) => {
            const data = snapshot.val();
            setScores(Object.values(data));
        })

    }, []);

    return (

        <View style={styles.loginButtonContainer}>
                 <Image source={require('./stars.png')} style={{ height:200, width:200 }} />
           <Text style={styles.register}>Top scores</Text>
   
            {
                scores.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Title>{i+1}</ListItem.Title>
                        <ListItem.Title>{item.nickname}</ListItem.Title>
                        <ListItem.Subtitle>{item.result}</ListItem.Subtitle>
                    </ListItem>
                ))
            }
        </View>
    )

}



export default TableComponent;