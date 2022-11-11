import { View, Text, TouchableOpacity, StyleSheet, Alert, Button, Pressable } from "react-native";
import { createArray } from "../hooks/CreateArray";
import React, { useEffect, useState } from "react";
import { styles } from "../styles/stylesheet";
import ButtonComponent from "../components/ButtonComponent";
import { FAB } from '@rneui/themed';
import highLightArray from "../hooks/HighLightArray";


export default function GameScreen({ route, navigation }) {
    //Buttonnumber not used at the moment
    const [buttonNumber, setButtonNumber] = React.useState(null);
    //Counter value tells the result at the end of the game. Best results are saved to the leaderboard.
    //Counter does not work at the moment, but it is okay - the lenght of the PlayersArrray can be used instead to measure the results
    const [counter, setCounter] = React.useState(0);
    const [generatedArray, setGeneratedArray] = useState([]);
    const [gameGoingOn, setGameGoingOn] = useState(false);
    const [highlight, setHighlight] = useState({ 'isOn': false, 'button': null });



    useEffect(() => {
        let array = createArray(500);
        setGeneratedArray(array);

    }, [gameGoingOn]);

    //This can be later modified so that the button is not visible while playing
    const startGame = () => {

        //Make this into a Dialog (Elements dialog component) to save space on the screen and to guide the player to start the game instantly
        setHighlight({ 'isOn': true })
        setCounter(0);
        setGameGoingOn(true);
        console.log("game started");
        console.log(generatedArray);
       

        highLightArray(generatedArray);
        //Then start highlightArray to start the buttons to flash highLightArray(generatedArray)
    }



    const buttonPressed = (event, number) => {
        event.preventDefault();
        let pushedNumber = number;
        if (pushedNumber === generatedArray[counter]) {
            console.log(`match: counter: ${counter} array: ${generatedArray[counter]} pushednumber: ${pushedNumber}`);

            setCounter(counter + 1);
        }
        else {
            console.log(`not match: counter: ${counter}  array: ${generatedArray[counter]} pushednumber: ${pushedNumber}`);

            setGameGoingOn(false);



        }
    }

    return (

        <View>
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <Button title="New game" onPress={startGame} />
                <Text>Counter: {counter} Present value: {buttonNumber}</Text>
            </View>
            <View style={styles.gameButtonsContainer}>
                <TouchableOpacity activeOpacity={1.0} style={styles.button1} onPress={event => buttonPressed(event, 1)}><Text>1</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={1.0} style={styles.button2} onPress={event => buttonPressed(event, 2)}><Text>2</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={1.0} style={styles.button3} onPress={event => buttonPressed(event, 3)}><Text>3</Text></TouchableOpacity>
            { highlight.isOn && highlight.button===4 ? <TouchableOpacity activeOpacity={1.0}  style={styles.button4} onPress={event => buttonPressed(event, 4)}><Text>4</Text></TouchableOpacity> :
             <TouchableOpacity activeOpacity={1.0}  style={styles.button4} onPress={event => buttonPressed(event, 4)}><Text>444444</Text></TouchableOpacity> }

            </View>
            <View>

            </View>
        </View>
    );
};


// Button 4        


/*

       <Pressable
                    onPress={event => buttonPressed(event, 4)}
                    style={({ pressed }) => [
                        {
                          backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                        },
                        styles.wrapperCustom
                      ]}>
                </Pressable>


*/