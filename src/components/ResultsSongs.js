import React from "react";
import { Text, Image, StyleSheet, SafeAreaView} from 'react-native'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from "react-native";
   
const ResultsSongs = ({navigation, name, artist, image2, id2}) =>{
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
                </TouchableOpacity>
                <Card.Divider color="transparent"/>
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