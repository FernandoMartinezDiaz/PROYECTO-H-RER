import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/screens/Home';
import SearchPage from './src/components/screens/SearchPage';
import SearchResults from './src/components/screens/SearchResults';
import Artist from './src/components/screens/Artist';
import Song from './src/components/screens/Song';
import Song1 from './src/components/screens/Song1';

//Instancia del componente StackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="SearchPage" component={SearchPage}/>
        <Stack.Screen name="SearchResults" component={SearchResults} options={{ title: 'SearchPage' }}/>
        <Stack.Screen name="Artist" component={Artist}/>
        <Stack.Screen name="Song" component={Song}/>
        <Stack.Screen name="Song1" component={Song1} options={{ title: 'Song' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>);
}