//importacion y instalacion expo constants 
import Constants from "expo-constants";

//implementacion de nuestras variables de entorno para al momento de 
//llamar nuestra variable en nuestra api sea mas facil implementarla y utilizarla
const ENV = {
    dev: {
        apiUrl: "https://shazam.p.rapidapi.com/",
        }
    };

    const getEnvVars = (env = Constants.manifest.realeaseChannel) => {

        if (__DEV__) {
            return ENV.dev;
        } else if (env == "default") {
          return ENV.default;
        }
    };
    
    export default getEnvVars;