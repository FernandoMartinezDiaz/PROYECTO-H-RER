import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Caption, TextInput, Text } from 'react-native-paper';
import {Context as AuthContext} from "../providers/AuthContext"
import {validate} from "email-validator"

function SingupForm({ navigation }){
    const {state, signup} =  useContext(AuthContext);
    const [fullname,  setFullname] = useState("");
    const [email,  setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [fullnameError,  setFullnameError] = useState(false);
    const [emailError,  setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [error, setError] = useState(false);

    //Verificar si el usuario se registra en la app

    useEffect(() => {
        if (state.registered) navigation.navigate("Home");
    }, [state.registered]);

    function handleVerify(input){
        if(input == "fullname"){
            if(!fullname) setFullnameError(true);
            else setFullnameError(false)
        } else if(input == "email"){
            if(!email) setEmailError(true);
            else if (!validate(email)) setEmailError(true)
            else setEmailError(false);
        } else if(input == "password"){
            if(!password) setPasswordError(true);
            else if (password.length < 6) setPasswordError(true);
            else setPasswordError(false);
        } else if(input == "confirmPassword"){
            if(!confirmPassword) setConfirmPasswordError(true);
            else if (password !== confirmPassword) setConfirmPasswordError(true);
            else setConfirmPasswordError(false);
        }else if(input == "signup"){
            if(
                fullname && 
                email && 
                password && 
                confirmPassword &&
                !fullnameError &&
                !emailError &&
                !passwordError &&
                !confirmPasswordError
                ){  
                try{
                signup(fullname, email, password);
                }catch(error){
                    console.log(error);
                }
            } else setError("All Fields are required");
        }

        
    }
    return(
        <View style={styles.padding}>
            {error && <Text style={styles.captions}>{error}</Text>}
            {state.errorMessage !== null && <Text style={styles.captions}>{state.errorMessage}</Text>}
            <TextInput 
            mode="outlined" 
            label="Fullname" 
            value={fullname} 
            onChangeText={setFullname}
            onBlur={() => handleVerify("fullname")}
            />

            {fullnameError && (
            <Caption style={styles.captions}>Please enter your fullname</Caption>
            )}

            <TextInput 
            mode="outlined" 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            onBlur={() => handleVerify("email")}
            />

            {emailError && (
            <Caption style={styles.captions}>Please enter your email address</Caption>
            )}

            <TextInput 
            mode="outlined" 
            label="Password" 
            value={password} 
            onChangeText={setPassword}
            onBlur={() => handleVerify("password")}
            />

            {passwordError && (
            <Caption style={styles.captions}>Please enter your password</Caption>
            )}

            <TextInput 
            mode="outlined" 
            label="Confirm Password" 
            value={confirmPassword} 
            onChangeText={setConfirmPassword}
            onBlur={() => handleVerify("confirmPassword")}
            />

            {confirmPasswordError && (
            <Caption style={styles.captions}>Please enter your password once more</Caption>
            )}

            <Button mode="contained" onPress={() => handleVerify("signup")} style={styles.button}>Create Account</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    captions:{
        color:"white"
    },
    button:{
        marginTop:10
    },
    padding:{
        padding:15,
    }
});

export default SingupForm;