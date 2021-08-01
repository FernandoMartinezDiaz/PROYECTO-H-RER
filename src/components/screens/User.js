import React,{ useState, useEffect, useContext} from "react";
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, Image} from "react-native";
import Songs from '../Songs'
import index from "../../api/index";
import { ActivityIndicator } from "react-native-paper";
import getEnvVars from "../../../Enviroment";
import { Card } from 'react-native-elements'
import { Button } from "react-native-paper";
import { Context as AuthContext} from '../providers/AuthContext'

const {apiUrl} = getEnvVars();


const User = ({navigation, route}) => {
  //manejo de estado de las canciones mas estado de carga
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const {signout} = useContext(AuthContext);

    const getSongs = async () => {
      try {
         //implementacion de api utilizando index.get para poder traer los datos desde nuestro index.js
        const respuesta = await index.get(`${apiUrl}songs/list-artist-top-tracks?id=${id}&locale=en-US`);
        //utilizamos nuestro enviroment.js para poder instanciar nuestras variables de entorno 
        //que estan conectadas a nuestra api.

        //mapeo que nos ayudaran a encontrar las canciones top de los artistas
        setSongs(respuesta.data.tracks);
        setLoading(false);

        //error al momento de ejecutar la peticion a la api
      } catch (error) {
        console.log(error);  
      }
    } 
    //Hook de efecto
    useEffect(()=>{
      getSongs();
    },[]);

    
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ImageBackground source={require("./resources/temp_pfp.jpeg")} style={styles.background} blurRadius={15}>
              <Image style={styles.images} source={require("./resources/temp_pfp.jpeg")} />
              <Text style={styles.text}>Patrick Midence</Text>
              <Button onPress={signout}>Sign Out</Button>
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
    backgroundColor:"transparent"
  }
});

//exportacion de nuestra pantalla 

export default User;