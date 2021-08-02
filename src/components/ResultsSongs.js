//Importacion de modulos necesarios
import React, {useContext, useState} from "react";
import { Text, Image, StyleSheet, SafeAreaView} from 'react-native'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import {Context as FavoriteContext} from "./providers/FavoriteContext"
import {Context as AuthContext} from './providers/AuthContext'
   
const ResultsSongs = ({navigation, name, artist, image2, id2}) =>{
    const { createFavorite } = useContext(FavoriteContext);
    const {state} = useContext(AuthContext);
    

    function handleSave(){
        if(id2){
            createFavorite(id2, image2, name, artist, state.user.id)
        }
    }


    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.user} onPress={()=>{navigation.navigate("Song1", {image2, id2})}}>
                        <Image
                                style={styles.images}
                                source={{
                                    uri: `${image2}`
                                }}
                            />
                        <SafeAreaView style={styles.text}>
                            <Text style={styles.song}>{name}</Text>
                            <Text style={styles.name}>{artist}</Text>
                        </SafeAreaView>
                        <SafeAreaView>
                            <IconButton icon="star" size={20} color="#FF5B00" onPress={() => handleSave()}/> 
                        </SafeAreaView>
                </TouchableOpacity>
                <Card.Divider color="transparent"/>
        </SafeAreaView>
    )
}


//Llamamos los estilos para nuestra aplicacion donde vamos a llamar todo lo necesario 
//para nuestros diseños.

const styles = StyleSheet.create({
    user:{
        flexDirection: 'row',
    },
    name:{
        fontFamily: "Roboto",
        color: "#FF5B00",
        fontSize: 10,
        fontWeight: "normal",
        textAlign: "left",
    },
    song: {
        fontFamily: "Roboto",
        color: "white",
        fontSize: 16,
        fontWeight: "normal",
        textAlign: "left",
        paddingRight: 35,
        paddingTop:25,
        flexShrink:1
    },
    text: {
        flex:1,
        flexDirection:'column',
        paddingLeft: 20,
    },
    images:{
        width:90,
        height:90,
        borderColor: "#FF5B00",
        borderWidth: 2
      },
});

export default ResultsSongs;