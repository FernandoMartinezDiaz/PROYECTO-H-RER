import React from "react";
import { Text, Image, StyleSheet, SafeAreaView} from 'react-native'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from "react-native";
   
const ResultsArtist = ({navigation, name, avatar, id}) =>{
    return(
        <SafeAreaView>
                <TouchableOpacity 
                style={styles.user}
                onPress={() =>{navigation.navigate("Artist",{name, avatar, id})}}>
                        <Image
                                style={styles.images}
                                source={{
                                    uri: `${avatar}`
                                }}
                            />
                            <SafeAreaView>
                                <Text style={styles.name}>{name}</Text>
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
        fontSize: 17,
        fontWeight: "normal",
        textAlign: "left",
        paddingTop: 30,
        paddingLeft: 20,
    },
});

export default ResultsArtist;