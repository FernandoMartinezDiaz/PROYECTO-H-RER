import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import SinginForm from "../forms/SigninForm";

function SingIn({navigation}){
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../screens/resources/background.gif')} style={styles.background}>
            <Image style={styles.images} source={require('../screens/resources/logo.png')} />
            <Text style={styles.login}>Login</Text>
            <SinginForm />
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
            <Text style={styles.text}>
                Don't have an account 
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.signup}> Sign up</Text>
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
        backgroundColor: "#000000",
    },
    forgotPassword:{
        textAlign:"auto",
        color:"#FF5B00",
        fontFamily:"Roboto",
        alignSelf:"center"
    },
    signup:{
        color: "#FF5B00",
        fontFamily:"Roboto",
        alignSelf:"center"
    },
    text:{
        color:"#FFFFFF",
        fontFamily:"Roboto",
        alignSelf:"center"
    },
    login:{
        alignSelf: "center",
        color:"white",
        fontSize:40,
        fontWeight: "bold"
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
    images:{
        alignSelf:"center",
        width:250,
        height:250,
      }
});

export default SingIn