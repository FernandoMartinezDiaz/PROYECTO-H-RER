//importacion y instalacion expo constants 
import Constants from "expo-constants";

//implementacion de nuestras variables de entorno para al momento de 
//llamar nuestra variable en nuestra api sea mas facil implementarla y utilizarla
const ENV = {
    dev: {
        apiUrl: "https://shazam.p.rapidapi.com/",
        apiKey: "AIzaSyBzUVZbgmG88MaFCgx_X6Kc2sVOuKUfjTo",
        authDomain: "proyecto-horer.firebaseapp.com",
        projectId: "proyecto-horer",
        storageBucket: "proyecto-horer.appspot.com",
        messagingSenderId: "422681652198",
        appId: "1:422681652198:web:48a61ff77b5c8d97c10427"
        },
    production:{
        apiUrl: "https://shazam.p.rapidapi.com/",
        apiKey: "AIzaSyBzUVZbgmG88MaFCgx_X6Kc2sVOuKUfjTo",
        authDomain: "proyecto-horer.firebaseapp.com",
        projectId: "proyecto-horer",
        storageBucket: "proyecto-horer.appspot.com",
        messagingSenderId: "422681652198",
        appId: "1:422681652198:web:48a61ff77b5c8d97c10427"
        }
    };

    const getEnvVars = (env = Constants.manifest.realeaseChannel) => {

        if (__DEV__) return ENV.dev;
        else if (env == "staging") return ENV.dev;
        else if (env == "production") return ENV.production;
        
    };
    
    export default getEnvVars;