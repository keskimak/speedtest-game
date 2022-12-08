import { View, Text, TouchableOpacity, StyleSheet, Alert, Button, Pressable, SafeAreaView } from "react-native";
import { createArray } from "../hooks/CreateArray";
import React, { useDeferredValue, useEffect, useState } from "react";
import { styles } from "../styles/stylesheet";
import ButtonComponent from "../components/ButtonComponent";
import { FAB } from '@rneui/themed';
import highLightArray from "../hooks/HighLightArray";
import { useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import saveResult from "../utils/SaveResult";
import { auth, database } from "../../firebase";
import { child, push, ref, set } from "firebase/database";
import { useUser } from "../context/userContext";
import { useResults } from "../context/resultContext";


export default function GameScreen({ route, navigation }) {
    const { user } = route.params;
    const [counter, setCounter] = useState(0);
    const [generatedArray, setGeneratedArray] = useState(createArray(400));
    const [gameGoingOn, setGameGoingOn] = useState(false);
    const [gameover, setGameover] = useState(false);
    const [highlight, setHighlight] = useState({ 'isOn': false, 'button': null });
    const [index, setIndex] = useState(0);
    let myindex = 0;
    let pace = 800;

    const myTimer = setInterval(() => {
    }, pace);

    useEffect(() => {

        if (gameGoingOn) {
            const interval = setInterval(() => {
            setHighlight({
                isOn: true,
                button: generatedArray[index]
            });
            console.log(index);
            pace=pace-4;
            console.log(pace);
            setIndex(index => index+1)
        }, 1000);
     
        return () => clearInterval(interval);
        }
        
      }, [myTimer]);


/*
    const handleInterval = () => {
        setGameGoingOn(true);

        let clear = false;
        console.log(generatedArray);

        let myInterval = setInterval(() => {
            setHighlight({
                isOn: true,
                button: generatedArray[myindex]
            });

            myindex++;
            console.log(myindex)

        }, 1000);
        if (gameover) {
            clear = true;
        }
        if (clear) {
            clearInterval(myInterval);
            console.log("CLEAR2")
        }
    }

*/
    //This can be later modified so that the button is not visible while playing
    const startGame = () => {
        setGameGoingOn(true);
        setGameover(false);
        
   
    }

    const endGame = () => {
        setCounter(0);
        setGameover(true);
        setGameGoingOn(false);
        setIndex(0);
        clearInterval(myTimer);
    

        Alert.alert("Game over! Your result: " + counter);

        //not working saveResult(user,counter);
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
            endGame();

        }
    }

   

    return (

        <SafeAreaView>
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                {!gameGoingOn ? <Button title={'start game'} onPress={startGame} /> : <></>}
                <Text>Game going on: {gameGoingOn} counter: {counter} Present value: {generatedArray[counter]}</Text>
            </View>
            {!gameover ?
                <View style={styles.gameButtonsContainer}>
                    {highlight.isOn && highlight.button === 1 ? <TouchableOpacity activeOpacity={1.0} style={styles.lightButton1} onPress={event => buttonPressed(event, 1)}><Text>3</Text></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={styles.button1} onPress={event => buttonPressed(event, 1)}><Text>1</Text></TouchableOpacity>}

                    {highlight.isOn && highlight.button === 2 ? <TouchableOpacity activeOpacity={1.0} style={styles.lightButton2} onPress={event => buttonPressed(event, 2)}><Text>3</Text></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={styles.button2} onPress={event => buttonPressed(event, 2)}><Text>2</Text></TouchableOpacity>}

                    {highlight.isOn && highlight.button === 3 ? <TouchableOpacity activeOpacity={1.0} style={styles.lightButton3} onPress={event => buttonPressed(event, 3)}><Text>3</Text></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={styles.button3} onPress={event => buttonPressed(event, 3)}><Text>3</Text></TouchableOpacity>}


                    {highlight.isOn && highlight.button === 4 ? <TouchableOpacity activeOpacity={1.0} style={styles.lightButton4} onPress={event => buttonPressed(event, 4)}><Text>4</Text></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={styles.button4} onPress={event => buttonPressed(event, 4)}><Text>4</Text></TouchableOpacity>}

                </View> : <></>}
            <View>

            </View>
        </SafeAreaView>
    );
};

