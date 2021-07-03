import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/screens/Home';
import SearchResults from './src/components/screens/SearchResults';
import Artist from './src/components/screens/Artist';
import Song from './src/components/screens/Song';

const Stack = createStackNavigator();

export default function App() {
  console.log("lo que sea");
  return (
    <>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="SearchResults" component={SearchResults}/>
        <Stack.Screen name="Artist" component={Artist}/>
        <Stack.Screen name="Song" component={Song}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>);
}