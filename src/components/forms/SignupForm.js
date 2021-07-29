import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Caption, TextInput } from 'react-native-paper';


function SingupForm(){
    const [fullname,  setFullname] = useState("");
    const [email,  setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [fullnameError,  setFullnameError] = useState(false);
    const [emailError,  setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    function handleVerify(input) {
        if (input === "fullname") {
          if (!fullname) setFullnameError(true);
          else setFullnameError(false);
        } else if (input === "email") {
          if (!email) setEmailError(true);
          else if (!validate(email)) setEmailError(true);
          else setEmailError(false);
        } else if (input === "password") {
          if (!password) setPasswordError(true);
          else if (password.length < 6) setPasswordError(true);
          else setPasswordError(false);
        } else if (input === "confirmPassword") {
          if (!confirmPassword) setConfirmPasswordError(true);
          else if (password !== confirmPassword) setConfirmPasswordError(true);
          else setConfirmPasswordError(false);
        } else if (input === "signup") {
          if (
            fullname &&
            email &&
            password &&
            confirmPassword &&
            !fullnameError &&
            !emailError &&
            !passwordError &&
            !confirmPasswordError
          ) {
            try {
              signup(fullname, email, password);
            } catch (error) {
              console.log(error);
            }
          } else setError("All fields are required!");
        }
      }
    
    return(
        <View>
            {error && <Text>{error}</Text>}
            {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
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

            <Button mode="contained">Create Account</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    captions:{
        color:"white"
    }
});

export default SingupForm;