//Importacion de modulos necesarios
import React, { useState, useEffect} from "react";
import { ImageBackground, StyleSheet, Text, View, Image, SafeAreaView} from "react-native";
import index from "../../api/index";
import { ActivityIndicator } from "react-native-paper";

import getEnvVars from "../../../Enviroment";

const {apiUrl} = getEnvVars();

const Song1 = ({route}) => {

   //maneja el estado de los datos de las canciones mas estado de carga
  const [song, setSong] = useState([]);
  const [album, setAlbum] = useState([]);
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(true);
  //llamado de parametros de otra pagina/componente
  const {image2, id2} = route.params

    const getSong = async () => {
      try {
        //implementacion de api utilizando index.get para poder traer los datos desde nuestro index.js
        const respuesta = await index.get(`${apiUrl}songs/get-details?key=${id2}&locale=en-US`);
        //mapeo que nos ayudaran a encontrar los datos de la cancion
        setSong(respuesta.data);
        setAlbum(respuesta.data.sections[0].metadata)
        setGenre(respuesta.data.genres.primary);
        setLoading(false);

        //error al momento de ejecutar la peticion a la api
      } catch (error) {
        console.log(error);  
      }
    } 
    //Hook de efecto
    useEffect(()=>{
      getSong();
    },[]);

  return(
  <View style={styles.container}>
      <ImageBackground source={{
            uri: `${image2}`
            }} style={styles.background} blurRadius={15}>
            <Image source={{
                uri: `${image2}`
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
  backbutton: {
    width:30,
    height:30,
    backgroundColor: "transparent",
    marginLeft: 10,
  }
});

export default Song1;