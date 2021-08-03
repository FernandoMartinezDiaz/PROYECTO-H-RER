import React,{ useEffect, useState, useContext} from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, ActivityIndicator} from "react-native";
import { Card } from 'react-native-elements'
import { color } from "react-native-elements/dist/helpers";
import { Button } from "react-native-paper";
import { Context as AuthContext} from '../providers/AuthContext';
import { Context as FavoriteContext} from '../providers/FavoriteContext';
import FavoriteList from "../shared/FavoriteList";



const User = ({navigation}) => {
  //manejo de estado de las canciones mas estado de carga
  const { state, signout} = useContext(AuthContext);
  const { state: favoriteState, getFavorites} = useContext(FavoriteContext);

  useEffect(() =>{
    getFavorites(state.user.id);
  }, []);
    
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
              <Image style={styles.images} source={require("./resources/user-logo.png")} />
              <Text style={styles.text}>{state.user.fullname}</Text>
              <Button onPress={signout} style={styles.button}>Sign Out</Button>
              <Card containerStyle={styles.card}>
                <Card.Title style={styles.title}>FAVORITES</Card.Title>
                    <FavoriteList favorites={favoriteState.favorites} navigation={navigation}/>
              </Card>
        </ScrollView>
      </SafeAreaView>

    )
}

//Llamamos los estilos para nuestra aplicacion donde vamos a llamar todo lo necesario 
//para nuestros diseños.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#202121',
  },
  background: {
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 30,
    fontWeight: "normal",
    textAlign: "center",
  },
  images:{
    alignSelf:"center",
    margin: 25,
    marginTop: 25,
    width:170,
    height:170,
    borderRadius:100,
    borderWidth: 2,
    borderColor:"#FF5B00",
  },
  title:{
    textAlign:"left",
    fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize: 20,
    color: "#FF5B00",
  },
  card:{
    backgroundColor:"transparent",
  },
  button:{
    width: 200,
    alignSelf: "center",
    marginTop: 15,
    backgroundColor:"#000000",
  }
});

//exportacion de nuestra pantalla 

export default User;