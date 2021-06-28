import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Searchbar } from "react-native-paper";
import Results from "../Results";


const SearchResults = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search any song or artist"
      />
    <Results />
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
        fontFamily: "Roboto",
        color: "white",
        fontSize: 20,
        fontWeight: "normal",
        textAlign: "center",
    },
});

export default SearchResults;