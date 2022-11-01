import { View, Text, TouchableOpacity, StyleSheet, Alert, Button } from "react-native";
import { createArray } from "../hooks/CreateArray";
import React, { useEffect } from "react";





export default function GameScreen({ navigation }) {

    const [buttonNumber, setButtonNumber] = React.useState(null);
    //Counter value tells the result at the end of the game. Best results are saved to the leaderboard.
    //Counter does not work at the moment, but it is okay - the lenght of the PlayersArrray can be used instead to measure the results
    const [counter, setCounter] = React.useState(0);
    let array = createArray(500);

    //This can be later modified so that the button is not visible while playing
    const startGame = () => {
        setButtonNumber(0);
        array = createArray(500);
        console.log(array);
        setCounter(0);

    }

    const buttonPressed = (event, number) => {
              
        setButtonNumber(number);
   
        console.log(`pressed number: ${number} array number: ${array[counter]} button number set: ${buttonNumber}`);
 
        setCounter(counter+1);
    
    }

    const handlePress = event => {
        
    }

 

 
    return (

        <View>
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <Button title="New game" onPress={startGame} />
                <Text>Counter: {counter} Present value: {buttonNumber}</Text></View>

            <View style={styles.gameButtonsContainer}>

                <TouchableOpacity style={styles.button1} onPress={handlePress}><Text>1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={event => buttonPressed(event,2)}><Text>2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button3} onPress={event => buttonPressed(event,3)}><Text>3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button4} onPress={event => buttonPressed(event,4)}><Text>4</Text></TouchableOpacity>

            </View>
            <View></View>
        </View>
    );
};

const styles = StyleSheet.create({
    gameButtonsContainer: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    button1: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 50

    },
    button2: {
        alignItems: "center",
        backgroundColor: 'yellow',
        padding: 50

    },
    button3: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 50


    },
    button4: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 50

    }

})