import React, { useState, useEffect} from "react";
import { ImageBackground, StyleSheet, Text, View, Image} from "react-native";
import index from "../../api/index";

import getEnvVars from "../../../Enviroment";

const {apiUrl} = getEnvVars();

const Song = ({route}) => {

  const [song, setSong] = useState([]);
  const [album, setAlbum] = useState([]);
  const {image, id} = route.params

    const getSong = async () => {
      try {
        
        const respuesta = await index.get(`${apiUrl}songs/get-details?key=${id}&locale=en-US`);

        setSong(respuesta.data);
        setAlbum(respuesta.data.sections)
        console.log(respuesta.data.sections);

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
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.text}>{song.subtitle}</Text>
      <Text style={styles.text}>2017</Text>
      <Text style={styles.text}>Hip-Hop/Rap</Text>
    </ImageBackground>
  </View>
  )
};

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
    marginBottom: 50,
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

export default Song;