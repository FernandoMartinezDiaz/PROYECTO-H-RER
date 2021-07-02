import { background } from "jimp";
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Pressable} from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
import Songs from '../Songs'

const Artist = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={{ 
        uri:'https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/13/3d/89/133d89fd-9305-6eae-14ad-1668e0e5279d/mza_4449571582288811102.png/800x800cc.jpg'
        }} style={styles.background} blurRadius={15}>
        <Image style={styles.images} source={{
            uri: 'https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/13/3d/89/133d89fd-9305-6eae-14ad-1668e0e5279d/mza_4449571582288811102.png/800x800cc.jpg'
        }} />
        <Text style={styles.text}>Kendrick Lamar</Text>
      <Songs navigation={navigation} />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'rgba(0,0,0, 1)',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 30,
    fontWeight: "normal",
    textAlign: "center",
    paddingTop: 5,
  },
  images:{
    alignSelf:"center",
    margin: 25,
    width:170,
    height:170,
    borderRadius:100,
    borderWidth: 2,
    borderColor:"#FF5B00",
  },
  backbutton:{
      width:30,
      height:30,
      backgroundColor: "transparent",
      marginTop: 40,
      marginLeft: 20
  }
});

export default Artist;