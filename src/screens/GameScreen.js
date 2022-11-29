import { View, Text, TouchableOpacity, StyleSheet, Alert, Button, Pressable, SafeAreaView } from "react-native";
import { createArray } from "../hooks/CreateArray";
import React, { useEffect, useState } from "react";
import { styles } from "../styles/stylesheet";
import ButtonComponent from "../components/ButtonComponent";
import { FAB } from '@rneui/themed';
import highLightArray from "../hooks/HighLightArray";
import { useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import saveResult from "../utils/SaveResult";
import { auth } from "../../firebase";
import { push, ref } from "firebase/database";


export default function GameScreen({ route, navigation }) {
    const { user } = route.params;


    //Buttonnumber not used at the moment
    const [buttonNumber, setButtonNumber] = React.useState(null);
    //Counter value tells the result at the end of the game. Best results are saved to the leaderboard.
    //Counter does not work at the moment, but it is okay - the lenght of the PlayersArrray can be used instead to measure the results
    const [counter, setCounter] = React.useState(0);
    const [generatedArray, setGeneratedArray] = useState([]);
    const [gameGoingOn, setGameGoingOn] = useState(false);
    const [highlight, setHighlight] = useState({ 'isOn': false, 'button': null });
    let index = 0;
    let array = [];
    let interval = 1000;


    //This can be later modified so that the button is not visible while playing
    const startGame = () => {

        //Make this into a Dialog (Elements dialog component) to save space on the screen and to guide the player to start the game instantly

        setCounter(0);
        setGameGoingOn(true);
        console.log("game started");
        array = createArray(500);
        console.log(array);
        //Then start highlightArray to start the buttons to flash highLightArray(generatedArray)
        handleArray();

    }

    const handleArray = () => {
        
        console.log(array);

        if (index > 20) {
            interval = 800;

        } else {
            interval = 500;

        }

        setInterval(() => {

            if (gameGoingOn) {
                setHighlight({
                    isOn: true,
                    button: array[index]
                });
                index++;
            }
            else (
                clearInterval
            )



        }, interval);


    };
    /*
     handeHighLight();
        function handeHighLight()  {
            let index = 0;
    
    
            function highlighMyButtons() {
    
                if (gameGoingOn) {
                    setHighlight({
                        isOn: true,
                        button: generatedArray[index]
                    });
                    index++;
                }
                else {
                    return;
                };
    
            }
            setInterval(highlighMyButtons, 1000);
        }
    */
    const buttonPressed = (event, number) => {
        event.preventDefault();
        let pushedNumber = number;
        if (pushedNumber === array[counter]) {
            console.log(`match: counter: ${counter} array: ${array[counter]} pushednumber: ${pushedNumber}`);
            setCounter(counter + 1);
        }
        else {
            console.log(`not match: counter: ${counter}  array: ${array[counter]} pushednumber: ${pushedNumber}`);
            Alert.alert("Game over! Your result: " + counter);
            setGameGoingOn(false);

            //result saving not working saveResult(user, counter);




        }
    }

    return (

        <SafeAreaView>
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                {!gameGoingOn ? <Button title="New game" onPress={startGame} /> : <></>}
                <Text>Counter: {counter} Present value: {array[counter]}</Text>
            </View>
            <View style={styles.gameButtonsContainer}>
                {highlight.isOn && highlight.button === 1 ? <TouchableOpacity activeOpacity={1.0} style={styles.lightButton1} onPress={event => buttonPressed(event, 1)}><Text>3</Text></TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1.0} style={styles.button1} onPress={event => buttonPressed(event, 1)}><Text>1</Text></TouchableOpacity>}

                {highlight.isOn && highlight.button === 2 ? <TouchableOpacity activeOpacity={1.0} style={styles.lightButton2} onPress={event => buttonPressed(event, 2)}><Text>3</Text></TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1.0} style={styles.button2} onPress={event => buttonPressed(event, 2)}><Text>2</Text></TouchableOpacity>}

                {highlight.isOn && highlight.button === 3 ? <TouchableOpacity activeOpacity={1.0} style={styles.lightButton3} onPress={event => buttonPressed(event, 3)}><Text>3</Text></TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1.0} style={styles.button3} onPress={event => buttonPressed(event, 3)}><Text>3</Text></TouchableOpacity>}


                {highlight.isOn && highlight.button === 4 ? <TouchableOpacity activeOpacity={1.0} style={styles.lightButton4} onPress={event => buttonPressed(event, 4)}><Text>4</Text></TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1.0} style={styles.button4} onPress={event => buttonPressed(event, 4)}><Text>4</Text></TouchableOpacity>}

            </View>
            <View>

            </View>
        </SafeAreaView>
    );
};

