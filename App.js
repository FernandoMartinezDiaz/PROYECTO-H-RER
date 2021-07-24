import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/screens/Home';
import SearchPage from './src/components/screens/SearchPage';
import SearchResults from './src/components/screens/SearchResults';
import Artist from './src/components/screens/Artist';
import Song from './src/components/screens/Song';
import Song1 from './src/components/screens/Song1';
import SignIn from './src/components/screens/SignIn';
import SignUp from './src/components/screens/SignUp';
import { Provider as AuthProvider } from "./src/components/providers/AuthContext"

//Instancia del componente StackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <AuthProvider>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn}/>
        <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="SearchPage" component={SearchPage}/>
        <Stack.Screen name="SearchResults" component={SearchResults} options={{ title: 'SearchPage' }}/>
        <Stack.Screen name="Artist" component={Artist}/>
        <Stack.Screen name="Song" component={Song}/>
        <Stack.Screen name="Song1" component={Song1} options={{ title: 'Song' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  </>);
}