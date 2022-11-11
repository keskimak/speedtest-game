import { NavigationContainer, navigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import GameScreen from './src/screens/GameScreen';
import SettingScreen from './src/screens/SettingScreen';
import { Button } from 'react-native-elements';


export default function App() {


  //At some point define backNavigation (see props)
  const Tab = createBottomTabNavigator();

 
  return (

<NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, tabBarShowLabel:false}} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*   
      <Tab.Screen name="Home" component={HomeScreen} />
  */
