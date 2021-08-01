import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Caption, TextInput, Text } from 'react-native-paper';
import { Context as AuthContext} from "../providers/AuthContext"

function SinginForm(){
    const {state, signin} = useContext(AuthContext);
    const [email,  setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState(false);

    function handleVerify(input){
        if(input == "email"){
            if(!email) setEmailError(true);
            else setEmailError(false);
        }else if(input == "password"){
            if(!password) setPasswordError(true);
            else setPasswordError(false);
        }else if(input == "signin"){
            if(email && password && !emailError && !passwordError){
                signin(email, password);
            }
        }
    }

    return(
        <View style={styles.padding}>
            {state.errorMessage !== null && <Text style={styles.captions}>{state.errorMessage}</Text>}
            <TextInput 
            mode="outlined" 
            label="Email" 
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
            onBlur={() => handleVerify("email")}
            />

            {emailError && (
            <Caption style={styles.captions}>Please enter your email address</Caption>
            )}

            <TextInput 
            mode="outlined" 
            label="Password" 
            autoCapitalize="none" 
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            onBlur={() => handleVerify("password")}
            />

            {passwordError && (<Caption style={styles.captions}>Please enter your password</Caption>)}

            <Button mode="contained" onPress={() =>handleVerify("signin")} style={styles.button}>Sign In</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    captions:{
        color:"white",
    },
    padding:{
        padding:15,
    },
    button:{
        marginTop:10
    }
});

export default SinginForm;