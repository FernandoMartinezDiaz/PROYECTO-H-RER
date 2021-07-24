import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SingupForm from "../forms/SignupForm";

function SignUp({navigation}){
    return(
        <View style={styles.container}>
            <Text>Register</Text>
            <SingupForm />
            <Text style={styles.text}>
                Already have an account?
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.signup}> Sign in</Text>
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
    signup:{
        color: "#FF5B00",
        fontFamily:"Roboto"
    },
    text:{
        color:"#FFFFFF",
        fontFamily:"Roboto"
    }
});

export default SignUp