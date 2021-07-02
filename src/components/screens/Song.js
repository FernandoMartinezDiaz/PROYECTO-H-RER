import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image} from "react-native";

const Song = () => (
  <View style={styles.container}>
    <ImageBackground source={{
          uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg'
          }} style={styles.background} blurRadius={15}>
          <Image source={{
              uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg'
          }} style={styles.images}/>
      <Text style={styles.title}>HUMBLE.</Text>
      <Text style={styles.text}>Kendrick Lamar</Text>
      <Text style={styles.text}>DAMN. COLLECTORS EDITION</Text>
      <Text style={styles.text}>2017</Text>
      <Text style={styles.text}>Hip-Hop/Rap</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'rgba(0,0,0, 1)'
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: 'black',
    textShadowOffset: {width: 4, height: 4},
  },
  text: {
    fontFamily: "Roboto",
    color: "#FF5B00",
    fontSize: 30,
    fontWeight: "normal",
    textAlign: "center",
  },
  icon: {
    width: 40,
    height:40,
    alignSelf: "center"
  },
  images:{
    alignSelf:"center",
    width:200,
    height:200,
    marginBottom: 50,
    borderWidth: 2,
    borderColor: "#FF5B00"
  },
  backbutton: {
    width:30,
    height:30,
    backgroundColor: "transparent",
    marginLeft: 10,
  }
});

export default Song;