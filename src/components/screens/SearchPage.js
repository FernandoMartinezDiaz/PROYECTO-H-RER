//Importacion de modulos necesarios
import React from "react";
import { StyleSheet, SafeAreaView, Text, View} from "react-native";
import { Card } from "react-native-elements";

import Search from "../Search";



const SearchPage = ({  navigation }) => {

    
  return (
    <SafeAreaView style={styles.container}>
        <Search navigation={navigation} />
        <Card containerStyle={styles.card}>
            <Text style={styles.text}>It seems you haven't searched anything...</Text>
            <Card.Divider color="transparent"/>
            <Text style={styles.text}>Try searching for an artist or a song</Text>
        </Card>
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
    card:{
        backgroundColor: "#1A1A1A"
    },
    text:{
        fontFamily:"Roboto",
        textAlign:"center",
        color: "#FFFFFF",
        fontSize: 15,
    }
});

export default SearchPage;