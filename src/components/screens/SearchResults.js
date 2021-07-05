import React, { useState, useEffect} from "react";
import { StyleSheet,ScrollView, SafeAreaView} from "react-native";
import { Card } from 'react-native-elements'
import { Searchbar } from "react-native-paper";
import index from "../../api/index";
import getEnvVars from "../../../Enviroment";
import ResultsArtist from "../ResultsArtist";
import ResultsSongs from "../ResultsSongs";

const {apiUrl} = getEnvVars();

const SearchResults = ({ navigation }) => {
  const [song, setSong] = useState([]);
  const [artist, setArtist] = useState([]);

    const getSearch = async () => {
      try {
        
        const respuesta = await index.get(`${apiUrl}search?term=Aviators&locale=en-US&offset=0&limit=5`);
        setSong (respuesta.data.tracks.hits);
        setArtist(respuesta.data.artists.hits);

        console.log(respuesta.data.tracks.hits);
        console.log(respuesta.data.artists.hits);

      } catch (error) {
        console.log(error);  
      }
    } 
    useEffect(()=>{
      getSearch();
    },[]);
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Searchbar 
        placeholder="Search any song or artist"
        onIconPress={()=> navigation.navigate("SearchResults")}/>
        <Card containerStyle={styles.container}>
          <Card.Title style={styles.title}>RESULTS</Card.Title> 
          <Card.Title style={styles.subtitle}>Artist</Card.Title>
          {artist.map(artists => {
      
            return <ResultsArtist
            key={artists.artist.id} 
            navigation={navigation} 
            name={artists.artist.name} 
            avatar={artists.artist.avatar}
            id={artists.artist.id}/>;
          })}
          <Card.Title style={styles.subtitle}>Songs</Card.Title>
          {song.map(songs =>{

            return <ResultsSongs
            key={songs.track.key} 
            navigation={navigation} 
            name={songs.track.title} 
            artist={songs.track.subtitle}
            album={songs.track.images.coverart}/>;
          })}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#1A1A1A",
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop:10,
        padding:7,
        borderRadius: 50,
        elevation: 3,
        width:80,
        height:80,
        backgroundColor: '#000000',
        borderColor:'#ffffff',
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "normal",
        textAlign: "center",
    },
    title:{
      textAlign:"center",
      fontSize: 20,
      color: "#FF5B00",
    },
    subtitle:{
      textAlign:"left",
      fontSize: 20,
      color: "#FF5B00",
    }
});

export default SearchResults;