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
import useId from "../hooks/useId";
import { gameStyles } from "../styles/gamestyles";


export default function GameScreen({ route, navigation }) {
    const { currentUser } = route.params;
    const [nickname, setNickname] = useState(currentUser.nickname)
    const [counter, setCounter] = useState(0);
    const [generatedArray, setGeneratedArray] = useState(createArray(400));
    const [gameGoingOn, setGameGoingOn] = useState(false);
    const [gameover, setGameover] = useState(false);
    const [highlight, setHighlight] = useState({ 'isOn': false, 'button': null });
    const [index, setIndex] = useState(0);
    const [pace, setPace] = useState(200);

    function scoreSave() {        
        const postData = {
            "player": nickname,
            "result": counter
        };
        const newPostKey = push(child(ref(database), 'scores')).key;
        set(ref(database, "scores/" + newPostKey + "/" ), {
            nickname:nickname,
            result: counter,
        });

    }

    const myTimer = setInterval(() => {

    }, pace);

    useEffect(() => {
        if (gameGoingOn) {
            const interval = setInterval(() => {
                setHighlight({
                    isOn: true,
                    button: generatedArray[index]
                });
                console.log(pace);
                setIndex(index => index + 1)
                setPace(pace => pace - 10)
            }, pace);

            return () => clearInterval(interval);
        }

    }, [myTimer]);


    //This can be later modified so that the button is not visible while playing
    const startGame = () => {
        setGameGoingOn(true);

    }

    const endGame = () => {
        setCounter(0);
        setGameGoingOn(false);
        setIndex(0);
        clearInterval(myTimer);
        Alert.alert("Game over! Your result: " + counter);
        scoreSave();


        //not working saveResult(user,counter);
    }

    const buttonPressed = (event, number) => {
        event.preventDefault();
        let pushedNumber = number;
        if (pushedNumber === generatedArray[counter]) {
            setCounter(counter + 1);
        }
        else {
            endGame();
        }
    }

    return (

        <SafeAreaView>
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                {!gameGoingOn ? <Button title={'start game'} onPress={startGame} />
                    : <></>}
            </View>
            {!gameover ?
                <View style={gameStyles.gameButtonsContainer}>
                    {highlight.isOn && highlight.button === 1 && gameGoingOn ? <TouchableOpacity activeOpacity={1.0} style={gameStyles.lightButton1} onPress={event => buttonPressed(event, 1)}><Text>3</Text></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={gameStyles.button1} onPress={event => buttonPressed(event, 1)}></TouchableOpacity>}

                    {highlight.isOn && highlight.button === 2 && gameGoingOn ? <TouchableOpacity activeOpacity={1.0} style={gameStyles.lightButton2} onPress={event => buttonPressed(event, 2)}><Text>3</Text></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={gameStyles.button2} onPress={event => buttonPressed(event, 2)}></TouchableOpacity>}

                    {highlight.isOn && highlight.button === 3 && gameGoingOn ? <TouchableOpacity activeOpacity={1.0} style={gameStyles.lightButton3} onPress={event => buttonPressed(event, 3)}><Text>3</Text></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={gameStyles.button3} onPress={event => buttonPressed(event, 3)}></TouchableOpacity>}


                    {highlight.isOn && highlight.button === 4 && gameGoingOn ? <TouchableOpacity activeOpacity={1.0} style={gameStyles.lightButton4} onPress={event => buttonPressed(event, 4)}><Text>4</Text></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={gameStyles.button4} onPress={event => buttonPressed(event, 4)}></TouchableOpacity>}

                </View> : <></>}
            <View>

            </View>
        </SafeAreaView>
    );
};

