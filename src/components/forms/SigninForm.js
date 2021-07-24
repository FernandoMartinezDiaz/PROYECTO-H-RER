import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Caption, TextInput } from 'react-native-paper';

function SinginForm(){
    const [email,  setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function handleVerify(input){
        if(input == "email"){
            if(!email) setEmailError(true);
            else setEmailError(false);
        }else if(input == "password"){
            if(!password) setPasswordError(true);
            else setPasswordError(false);
        }
    }

    return(
        <View>
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

            <Button mode="contained">Sign In</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    captions:{
        color:"white"
    }
});

export default SinginForm;