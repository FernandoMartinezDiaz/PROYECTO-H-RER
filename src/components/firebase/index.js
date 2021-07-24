import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore"
import getEnvVars from "../../../Enviroment";

const{
    apiKey,
    authDomain,projectId,
    storageBucket,
    messagingSenderId,
    appId
} = getEnvVars();

//Pasar los vavlores de las keys a Firebase

const firebaseConfig ={
    apiKey,
    authDomain,projectId,
    storageBucket,
    messagingSenderId,
    appId
};

//Iniciar la conexion a firebase si no se ha realizado previamente

if(!firebase.app.length) firebase.initializeApp(firebaseConfig);

export{ firebase };