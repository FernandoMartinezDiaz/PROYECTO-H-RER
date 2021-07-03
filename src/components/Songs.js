import React from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { Card } from 'react-native-elements'
   
const Songs = ({ navigation }) =>{
    return(
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>TOP SONGS</Card.Title>
            <Pressable style={styles.user} onPress={()=>{navigation.navigate("Song")}}>
                        <Image
                                style={styles.images}
                                source={{
                                    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg"
                                }}
                            />
                        <View style={styles.text}>
                            <Text style={styles.song}>Humble</Text>
                            <Text style={styles.name2}>Kendrick Lamar</Text>
                        </View>
            </Pressable>
            <Card.Divider color= "transparent" />
        </Card> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "transparent",
        textAlign:"left",
        fontSize: 20,
        color: "#FF5B00",
        borderColor: "transparent",
        borderWidth: 0
    },
    title:{
        textAlign:"left",
        fontSize: 20,
        color: "#FF5B00",
    },
    user:{
        flexDirection: 'row',
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
    images:{
        width:90,
        height:90,
        borderColor: "#FF5B00",
        borderWidth: 1,
      },
});

export default Songs;