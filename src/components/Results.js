import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native'
import { Card } from 'react-native-elements'
   
const Results = () =>{
    return(
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.container}>RESULTS</Card.Title>
                <View style={styles.user}>
                        <Image
                                style={styles.images}
                                source={{
                                    uri: "https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/13/3d/89/133d89fd-9305-6eae-14ad-1668e0e5279d/mza_4449571582288811102.png/800x800cc.jpg"
                                }}
                            />
                        <Text style={styles.name}>Kendrick Lamar</Text>
                </View>
            <Card.Divider />
            <Card.Divider color="#FFFFFF"/>
            <View style={styles.user}>
                        <Image
                                style={styles.images2}
                                source={{
                                    uri: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg"
                                }}
                            />
                        <View style={styles.text}>
                            <Text style={styles.song}>Humble</Text>
                            <Text style={styles.name2}>Kendrick Lamar</Text>
                        </View>
                </View>
            <Card.Divider />
        </Card> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#1A1A1A",
        textAlign:"Left",
        fontSize: 20,
        color: "#FF5B00",
    },
    user:{
        flex: 1,
        flexDirection: 'row',
    },
    images:{
        width:90,
        height:90,
        borderRadius:50,
        borderColor: "#FF5B00",
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
      },
});

export default Results;