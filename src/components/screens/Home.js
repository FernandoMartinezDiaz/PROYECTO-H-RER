import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, Pressable} from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={require('../screens/resources/background.jpg')} style={styles.background}>
      <Text style={styles.text}>Welcome to</Text>
      <Image style={styles.images} source={require('../screens/resources/logo.png')} />
      <Text style={styles.text}>Hörer</Text>
        <TouchableOpacity
        style={styles.button} 
        navigation={navigation}
        onPress={()=>{navigation.navigate("SearchResults")}}>
          <Image source={require("../screens/resources/search_icon.png")} style={styles.icon} />
        </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 42,
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
    width:300,
    height:300,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop:10,
    padding:7,
    borderRadius: 50,
    elevation: 3,
    width:80,
    height:80,
    backgroundColor: '#000000',
    borderColor:'#ffffff',
  },
});

export default Home;