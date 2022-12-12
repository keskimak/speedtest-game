import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from "react-native";
import { createArray } from "../utils/CreateArray";
import React, { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { child, onValue, push, ref, set, update } from "firebase/database";
import { gameStyles } from "../styles/gamestyles";
import getUser from "../utils/currentUser";
import { styles } from "../styles/stylesheet";
import Button from "react-native-flat-button";
import { Modal } from "react-native";

export default function GameScreen({ navigation }) {
    const uid = auth.currentUser.uid;
    const { currentUser } = getUser();
    const [counter, setCounter] = useState(0);
    const [bestResult, setBestresult] = useState();
    const [generatedArray, setGeneratedArray] = useState(createArray(400));
    const [gameGoingOn, setGameGoingOn] = useState(false);
    const [highlight, setHighlight] = useState({ 'isOn': false, 'button': null });
    const [index, setIndex] = useState(0);
    const [pace, setPace] = useState(100);
    const [modalVisible, setModalVisible] = useState(true);


    const myTimer = setInterval(() => {
    }, 100);
    useEffect(() => {
        if (gameGoingOn) {
            const interval = setInterval(() => {
                setHighlight({
                    isOn: true,
                    button: generatedArray[index]
                });
                setIndex(index => index + 1)
            }, pace);
            return () => clearInterval(interval);
        }
    }, [myTimer]);

    const goHome = () =>{
        navigation.navigate('HomeScreen')
    }

    const startGame = () => {
        setCounter(0);
        setGameGoingOn(true);
        setModalVisible(!modalVisible);
        const userRef = ref(database, 'users/' + uid+"/bestresult");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            setBestresult(data);    
        })
    }

    const endGame = () => {
        setIndex(0);
        clearInterval(myTimer);
        console.log(counter + ' best: '+bestResult)
        try {
            if (counter > bestResult) {
                update(ref(database, "users/" + uid + "/"), {
                    "bestresult": counter
                })
                setBestresult(counter);
            }
            setGameGoingOn(false);
        } catch (error) {
            Alert.alert('Error occured when saving result')
        }
        setModalVisible(true);
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
        <SafeAreaView style={{
            backgroundColor: '#FFCA3A', flex: 1,
        }}>
            <View style={{
                alignItems: 'center', justifyContent: 'center', marginTop: 50,
                backgroundColor: '#FFCA3A',
            }}>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={!gameGoingOn}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                { (counter>0)?  <Button
                                    type="custom"
                                    backgroundColor={"#8e44ad"}
                                    borderColor={"#1abc9c"}
                                    borderRadius={6}
                                    shadowHeight={8}
                                    activeOpacity={0.5}
                                    containerStyle={styles.buttonContainer}
                                    contentStyle={{ fontSize: 22, fontWeight: '900' }}
                                >
                                    PREVIOUS RESULT: {counter}
                                </Button>  : <></>   }
                           
                                <Button
                                    type="custom"
                                    backgroundColor={"#1abc9c"}
                                    borderColor={"#8e44ad"}
                                    borderRadius={6}
                                    shadowHeight={8}
                                    activeOpacity={0.5}
                                    containerStyle={styles.buttonContainer}
                                    contentStyle={{ fontSize: 22, fontWeight: '900' }}
                                    onPress={startGame}

                                >
                                    NEW GAME
                                </Button>
                                <Button
                                    type="custom"
                                    backgroundColor={"#1abc9c"}
                                    borderColor={"#8e44ad"}
                                    borderRadius={6}
                                    shadowHeight={8}
                                    activeOpacity={0.5}
                                    containerStyle={styles.buttonContainer}
                                    contentStyle={{ fontSize: 22, fontWeight: '900' }}
                                    onPress={goHome}
                                    

                                >
                                   QUIT
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
          
                <View style={gameStyles.gameButtonsContainer}>

                    {highlight.isOn && highlight.button === 1 && gameGoingOn ? <TouchableOpacity activeOpacity={1.0} style={gameStyles.highlightedButton} onPress={event => buttonPressed(event, 1)}></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={gameStyles.gameButton} onPress={event => buttonPressed(event, 1)}></TouchableOpacity>}

                    {highlight.isOn && highlight.button === 2 && gameGoingOn ? <TouchableOpacity activeOpacity={1.0} style={gameStyles.highlightedButton} onPress={event => buttonPressed(event, 2)}></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={gameStyles.gameButton} onPress={event => buttonPressed(event, 2)}></TouchableOpacity>}

                    {highlight.isOn && highlight.button === 3 && gameGoingOn ? <TouchableOpacity activeOpacity={1.0} style={gameStyles.highlightedButton} onPress={event => buttonPressed(event, 3)}></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={gameStyles.gameButton} onPress={event => buttonPressed(event, 3)}></TouchableOpacity>}


                    {highlight.isOn && highlight.button === 4 && gameGoingOn ? <TouchableOpacity activeOpacity={1.0} style={gameStyles.highlightedButton} onPress={event => buttonPressed(event, 4)}></TouchableOpacity> :
                        <TouchableOpacity activeOpacity={1.0} style={gameStyles.gameButton} onPress={event => buttonPressed(event, 4)}></TouchableOpacity>}

                </View> 
            <View>

            </View>
        </SafeAreaView>
    );
};



