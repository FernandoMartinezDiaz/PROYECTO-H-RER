import Constants from "expo-constants";

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