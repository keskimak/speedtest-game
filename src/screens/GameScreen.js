import { StyleSheet } from "react-native";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { createArray } from "../hooks/CreateArray";
import { createPlayerArray } from "../hooks/CreatePlayerArray";
import React, { useEffect } from "react";
import { Alert } from "react-native";
import { CompareArrays } from "../hooks/CompareArrays";



export default function GameScreen({ navigation }) {

    const [buttonNumber, setButtonNumber] = React.useState(null);


    //Counter value tells the result at the end of the game. Best results are saved to the leaderboard.
    //Counter does not work at the moment, but it is okay - the lenght of the PlayersArrray can be used instead to measure the results
    const [counter, setCounter] = React.useState(0);

    //This can be later modified so that the button is not visible while playing
    const startGame = () => {
        setButtonNumber(null);
        createArray(300)

    }

    const buttonPressed = (event, number) => {
        event.preventDefault();
        setButtonNumber(number);

    }

    const useEffect = (() => {
    //Player array creation is actually not needed -the comparison can be done right away with the initial array. 
        CompareArrays() //do this later


    }, buttonNumber)


    return (

        <View>
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <Button title="New game" onPress={startGame} />
                <Text>Counter: {counter} Present value: {buttonNumber}</Text></View>

            <View style={styles.gameButtonsContainer}>

                <TouchableOpacity style={styles.button1} onPress={event => buttonPressed(event, 1)}><Text>1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={event => buttonPressed(event, 2)}><Text>2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button3} onPress={event => buttonPressed(event, 3)}><Text>3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button4} onPress={event => buttonPressed(event, 4)}><Text>4</Text></TouchableOpacity>

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