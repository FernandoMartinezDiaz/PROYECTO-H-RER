//Importacion de modulos necesarios
import React, { useState, useEffect} from "react";
import { StyleSheet,ScrollView, SafeAreaView} from "react-native";
import { Card } from 'react-native-elements'
import index from "../../api/index";
import getEnvVars from "../../../Enviroment";
import ResultsArtist from "../ResultsArtist";
import ResultsSongs from "../ResultsSongs";
import Search from "../Search";
import { ActivityIndicator } from "react-native-paper";

const {apiUrl} = getEnvVars();

const SearchResults = ({ route, navigation }) => {
  //llamado de parametros de otra pagina/componente
  const {search} = route.params
  //maneja el estado de las canciones mas estado de carga
  const [song, setSong] = useState([]);
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);

    const getSearch = async () => {
      
      try {
          //implementacion de api utilizando index.get para poder traer los datos desde nuestro index.js
        const respuesta = await index.get(`${apiUrl}search?term=${search}&locale=en-US&offset=0&limit=5`);
          //utilizamos nuestro enviroment.js para poder instanciar nuestras variables de entorno 
          //que estan conectadas a nuestra api.

        
        setSong (respuesta.data.tracks.hits);
        //mapeo que nos ayudaran a encontrar los hists de nuestros artistas 
        setArtist(respuesta.data.artists.hits);
        setLoading(false);

        //error al momento de ejecutar la peticion a la api
      } catch (error) {
        console.log(error);  
      }
    } 
    //Hook de efecto
    useEffect(()=>{
      getSearch();
    },[]);
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Search navigation={navigation} />
        <Card containerStyle={styles.container}>
          <Card.Title style={styles.title}>RESULTS</Card.Title> 
          <Card.Title style={styles.subtitle}>Artist</Card.Title>
          {loading ? (
            <ActivityIndicator animating={loading} size="large" color="#FF5B00" />
            ) : (
             <SafeAreaView>
              {artist.map(artists => {
                return <ResultsArtist
                key={artists.artist.id} 
                navigation={navigation} 
                name={artists.artist.name} 
                avatar={artists.artist.avatar}
                id={artists.artist.id}/>;
  
              })}
            </SafeAreaView>
          )}

          <Card.Title style={styles.subtitle}>Songs</Card.Title>
          {loading ? (
            <ActivityIndicator animating={loading} size="large" color="#FF5B00" />
            ) : (
              <SafeAreaView>
                {song.map(songs =>{
                  return <ResultsSongs
                  key={songs.track.key} 
                  navigation={navigation} 
                  name={songs.track.title} 
                  artist={songs.track.subtitle}
                  image2={songs.track.images.coverart}
                  id2={songs.track.key}/>;
                })}
              </SafeAreaView>
            )}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

//Llamamos los estilos para nuestra aplicacion donde vamos a llamar todo lo necesario 
//para nuestros diseños.
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