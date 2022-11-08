import { Button } from "react-native-elements";
import { useState, Text } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesheet";

const ButtonComponent = ({isHighLighted}) => {
    
return (
 <View>
    {isHighLighted ? <TouchableOpacity style={styles.button1}><Text>Button 1 highlighted</Text></TouchableOpacity> : <TouchableOpacity><Text>Button 1</Text> </TouchableOpacity> }
  </View>
);
};

export default ButtonComponent;