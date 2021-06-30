import axios from "axios";
import getEnvVars from "../../enviroments";

const { apiUrl, apiKey ,apiHost,useQuery } = getEnvVars();

//Intancia de conexion
const instance = axios.create({
    baseURL: 'https://shazam.p.rapidapi.com/',
    headers: {
        'x-rapidapi-key': 'bd75fc219emsh004ef34b5ae8b6ep1f6e74jsnd294cdfa5b67',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
});

export default instance;