import React,{ useState, useEffect} from "react";
import { ImageBackground, StyleSheet, Text, SafeAreaView, ScrollView, Image} from "react-native";
import Songs from '../Songs'
import index from "../../api/index";

import getEnvVars from "../../../Enviroment";
import { Card } from 'react-native-elements'

const {apiUrl} = getEnvVars();

const Artist = ({navigation, route}) => {
  const [songs, setSongs] = useState([]);
  const {name, avatar, id} = route.params

    const getSongs = async () => {
      try {
        
        const respuesta = await index.get(`${apiUrl}songs/list-artist-top-tracks?id=${id}&locale=en-US`);
        setSongs(respuesta.data.tracks);
        console.log(respuesta.data.tracks);

      } catch (error) {
        console.log(error);  
      }
    } 
    useEffect(()=>{
      getSongs();
    },[]);

    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ImageBackground source={{ 
              uri:`${avatar}`
              }} style={styles.background} blurRadius={15}>
              <Image style={styles.images} source={{
                  uri: `${avatar}`
              }} />
              <Text style={styles.text}>{name}</Text>
              <Card containerStyle={styles.card}>
                <Card.Title style={styles.title}>TOP SONGS</Card.Title>
                  {songs.map(songlist => {

                    return <Songs 
                    navigation={navigation} 
                    key={songlist.key} 
                    title={songlist.title} 
                    subtitle={songlist.subtitle} 
                    image={songlist.images.coverart}/>

                  })}
              </Card>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>

    )
}

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

export default Artist;