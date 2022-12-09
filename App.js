import 'react-native-gesture-handler';
import { NavigationContainer, navigation } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import GameScreen from './src/screens/GameScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {

  //At some point define backNavigation (see props)
  const Stack = createStackNavigator();
 
  return (

<NavigationContainer>
<Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}} />
      <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false}} />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
  </NavigationContainer>

  );
}

