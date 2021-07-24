import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SinginForm from "../forms/SigninForm";

function SingIn({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <SinginForm />
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
            <Text style={styles.text}>
                Don't have an account 
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.signup}> Sign up</Text>
                </TouchableOpacity> 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "#000000"
    },
    forgotPassword:{
        textAlign:"auto",
        color:"#FF5B00",
        fontFamily:"Roboto"
    },
    signup:{
        color: "#FF5B00",
        fontFamily:"Roboto"
    },
    text:{
        color:"#FFFFFF",
        fontFamily:"Roboto"
    }
});

export default SingIn