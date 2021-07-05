import React, { useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView} from 'react-native'
import { Card } from 'react-native-elements'
import index from "../../src/api/index";
import { constant } from "async";
import { TouchableOpacity } from "react-native";
   
const ResultsSongs = ({navigation, name, artist, album}) =>{
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.user} onPress={()=>{navigation.navigate("Song")}}>
                        <Image
                                style={styles.images}
                                source={{
                                    uri: `${album}`
                                }}
                            />
                        <SafeAreaView style={styles.text}>
                            <Text style={styles.song}>{name}</Text>
                            <Text style={styles.name}>{artist}</Text>
                        </SafeAreaView>
                </TouchableOpacity>
                <Card.Divider />
        </SafeAreaView>
    )
}

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