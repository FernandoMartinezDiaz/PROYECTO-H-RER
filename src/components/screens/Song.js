//Importacion de modulos necesarios
import React, { useState, useEffect} from "react";
import { ImageBackground, StyleSheet, Text, View, Image, SafeAreaView} from "react-native";
import index from "../../api/index";
import { ActivityIndicator } from "react-native-paper";

import getEnvVars from "../../../Enviroment";

const {apiUrl} = getEnvVars();

const Song = ({route}) => {

  const [song, setSong] = useState([]);
  const [album, setAlbum] = useState([]);
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const {image, id} = route.params

    const getSong = async () => {
      try {
        const respuesta = await index.get(`${apiUrl}songs/get-details?key=${id}&locale=en-US`);
        setSong(respuesta.data);
        setAlbum(respuesta.data.sections[0].metadata);
        setGenre(respuesta.data.genres.primary);
        setLoading(false);

      } catch (error) {
        console.log(error);  
      }
    } 
    useEffect(()=>{
      getSong();
    },[]);

  return(
  <View style={styles.container}>
    <ImageBackground source={{
          uri: `${image}`
          }} style={styles.background} blurRadius={15}>
          <Image source={{
              uri: `${image}`
          }} style={styles.images}/>
    {loading ? (
        <ActivityIndicator animating={loading} size="large" color="#FF5B00"/>
      ) : (
        <SafeAreaView>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.text}>{song.subtitle}</Text>
          {album.map(albums =>{
            return <Text key={albums.title} style={styles.text}>{albums.text}</Text>
          })}
          <Text style={styles.text}>{genre}</Text>
        </SafeAreaView>
      )}
      
    </ImageBackground>
  </View>
  )
};

//Llamamos los estilos para nuestra aplicacion donde vamos a llamar todo lo necesario 
//para nuestros diseños.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'rgba(0,0,0, 1)'
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
  },
  text: {
    fontFamily: "Roboto",
    color: "#FF5B00",
    fontSize: 20,
    fontWeight: "normal",
    textAlign: "center",
  },
  icon: {
    width: 40,
    height:40,
    alignSelf: "center"
  },
  images:{
    alignSelf:"center",
    width:200,
    height:200,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#FF5B00"
  },
});

export default Song;