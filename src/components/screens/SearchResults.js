import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Searchbar } from "react-native-paper";
import Results from "../Results";
import index from "../../api/index";
import { constant } from "async";
import getEnvVars from "../../../Enviroment";

const {apiUrl} = getEnvVars();

const SearchResults = ({ navigation }) => {
  const [search, setSearch] = useState([]);

    const getSearch = async () => {
      try {
        
        const respuesta = await index.get(`${apiUrl}search?term=kiss the rain&locale=en-US&offset=0&limit=5`);
        setSearch (respuesta.data.tracks.hits);
        console.log(respuesta.data.tracks.hits);

      } catch (error) {
        console.log(error);  
      }
    } 
    useEffect(()=>{
      getSearch();
    },[]);
    
  return (
    <View style={styles.container}>
      <Searchbar placeholder="Search any song or artist"/>
      {search.map(searchs => {
    
          return <Results 
          key={searchs.track.key} 
          navigation={navigation} 
          title={searchs.track.title} 
          subtitle={searchs.track.subtitle}
          artist={searchs.track.images.background}
          song={searchs.track.images.coverart}/>;

      })}
    </View>
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
});

export default SearchResults;