import React, { useState, useEffect} from "react";
import { StyleSheet, View } from "react-native";
import { Button, Searchbar } from "react-native-paper";
import Results from "../Results";
import index from "../../api/index";
import { constant } from "async";


const SearchResults = ({ navigation }) => {
  const [search, setSearch] = useState(null);
    const getSearch = async () => {
      try {
        const respuesta = await index.get('search?term=kiss the rain&locale=en-US&offset=0&limit=5');
        //setSearch (respuesta.tracks);
        console.log(respuesta.data.tracks);
        console.log("promesa");
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      getSearch ();
        console.log("llamado de funcion");
    },[]);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search any song or artist"
      />
    <Results navigation={navigation} />
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