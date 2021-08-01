import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import SingupForm from "../forms/SignupForm";

function SignUp({navigation}){

    return(
        <View style={styles.container}>
        <ImageBackground source={require('../screens/resources/background.gif')} style={styles.background}>
            <Image style={styles.images} source={require('../screens/resources/logo.png')} />
            <Text style={styles.register}>Register</Text>
            <SingupForm />
            <Text style={styles.text}>
                Already have an account?
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.signup}> Sign in</Text>
                </TouchableOpacity> 
            </Text>
        </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "#000000"
    },
    signup:{
        color: "#FF5B00",
        fontFamily:"Roboto"
    },
    text:{
        color:"#FFFFFF",
        fontFamily:"Roboto",
        alignSelf: "center"
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
    register:{
        alignSelf: "center",
        color:"white",
        fontSize:40,
        fontWeight: "bold"
    },
    images:{
        alignSelf:"center",
        width:170,
        height:170,
      }
});

export default SignUp