import React,  {useContext, useEffect} from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SearchPage from '../screens/SearchPage';
import SearchResults from '../screens/SearchResults';
import Artist from '../screens/Artist';
import Song from '../screens/Song';
import Song1 from '../screens/Song1';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import User from '../screens/User';
import { Context as AuthContext } from '../providers/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons';


//Instancia del componente StackNavigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  const { state, persistLogin } = useContext(AuthContext);

  //Verificar si existe un token de autentificacion
  useEffect(() => {
    persistLogin();
  }, []);


  const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="SearchPage" component={SearchPage}/>
      <HomeStack.Screen name="SearchResults" component={SearchResults} options={{ title: 'SearchPage' }}/>
      <HomeStack.Screen name="Artist" component={Artist}/>
      <HomeStack.Screen name="Song" component={Song}/>
      <HomeStack.Screen name="Song1" component={Song1} options={{ title: 'Song' }}/>
    </HomeStack.Navigator>
  );
}

  return (
    <NavigationContainer theme={DarkTheme}>
      {!state.loading && (
          <>
          {state.loggedIn ? (
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'SearchPage') {
                iconName = focused ? 'search' : 'search';
              } else if (route.name === 'User') {
                iconName = focused ? 'star' : 'star';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FF5B00',
            inactiveTintColor: 'gray',
          }}>
            <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Tab.Screen name="SearchPage" component={HomeStackScreen}/>
            <Tab.Screen name="User" component={User}/>
          </Tab.Navigator>
          ) : (
            <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn}/>
            <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
            </Stack.Navigator>
          )}
          </>
      )}
    </NavigationContainer>
    );
}

export default Navigation;