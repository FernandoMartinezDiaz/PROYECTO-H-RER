import React,{ useEffect, useContext} from "react";
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, Image} from "react-native";
import Songs from '../Songs'
import index from "../../api/index";
import { ActivityIndicator } from "react-native-paper";
import getEnvVars from "../../../Enviroment";
import { Card } from 'react-native-elements'
import { Button } from "react-native-paper";
import { Context as AuthContext} from '../providers/AuthContext';
import { Context as FavoriteContext} from '../providers/FavoriteContext';
import FavoriteList from "../shared/FavoriteList";

const {apiUrl} = getEnvVars();


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
          <ImageBackground source={require("./resources/temp_pfp.jpeg")} style={styles.background} blurRadius={15}>
              <Image style={styles.images} source={require("./resources/temp_pfp.jpeg")} />
              <Text style={styles.text}>Patrick Midence</Text>
              <Button onPress={signout}>Sign Out</Button>
              <Card containerStyle={styles.card}>
                <Card.Title style={styles.title}>FAVORITES</Card.Title>
                  <FavoriteList favorites={favoriteState.favorites} navigation={navigation}/>
              </Card>
          </ImageBackground>
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
    backgroundColor: 'rgba(0,0,0, 1)',
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
    paddingTop: 5,
  },
  images:{
    alignSelf:"center",
    margin: 25,
    width:170,
    height:170,
    borderRadius:100,
    borderWidth: 2,
    borderColor:"#FF5B00",
  },
  title:{
    textAlign:"left",
    fontSize: 20,
    color: "#FF5B00",
  },
  card:{
    backgroundColor:"transparent",
  }
});

//exportacion de nuestra pantalla 

export default User;