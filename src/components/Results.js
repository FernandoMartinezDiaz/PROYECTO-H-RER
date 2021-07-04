import React, { useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { Card } from 'react-native-elements'
import index from "../../src/api/index";
import { constant } from "async";
import { TouchableOpacity } from "react-native";
   
const Results = ({navigation, title, subtitle, artist, song}) =>{
    return(
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>RESULTS</Card.Title> 
                <TouchableOpacity style={styles.user} onPress={() =>{navigation.navigate("Artist")}}>
                        <Image
                                style={styles.images}
                                source={{
                                    uri: `${artist}`
                                }}
                            />
                            <View>
                                <Text style={styles.name}>{subtitle}</Text>
                            </View>
                </TouchableOpacity>
                <Card.Divider color={"transparent"} />
                <Card.Divider />
            <TouchableOpacity style={styles.user2} onPress={()=>{navigation.navigate("Song")}}>
                        <Image
                                style={styles.images2}
                                source={{
                                    uri: `${song}`
                                }}
                            />
                        <View style={styles.text}>
                            <Text style={styles.song}>{title}</Text>
                            <Text style={styles.name2}>{subtitle}</Text>
                        </View>
                </TouchableOpacity>
        </Card> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#1A1A1A",
    },
    title:{
        textAlign:"left",
        fontSize: 20,
        color: "#FF5B00",
    },
    user:{
        flexDirection: 'row',
    },
    user2:{
        flexDirection: 'row',
    },
    images:{
        width:90,
        height:90,
        borderRadius:50,
        borderColor: "#FF5B00",
        borderWidth: 2,
      },
    name: {
        fontFamily: "Roboto",
        color: "white",
        fontSize: 20,
        fontWeight: "normal",
        textAlign: "center",
        paddingTop: 30,
        paddingLeft: 20,
    },
    name2:{
        fontFamily: "Roboto",
        color: "#FF5B00",
        fontSize: 15,
        fontWeight: "normal",
        textAlign: "center",
    },
    song: {
        fontFamily: "Roboto",
        color: "white",
        fontSize: 20,
        fontWeight: "normal",
        textAlign: "center",
        paddingRight: 35,
        paddingTop:25,
    },
    text: {
        paddingLeft: 20,
    },
    images2:{
        width:90,
        height:90,
        borderColor: "#FF5B00",
        borderWidth: 2
      },
});

export default Results;