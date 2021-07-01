import axios from "axios";

//const { apiUrl, apiKey ,apiHost,useQuery } = getEnvVars();

//Intancia de conexion
const instance = axios.create({
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    headers: {
        'x-rapidapi-key': 'bd75fc219emsh004ef34b5ae8b6ep1f6e74jsnd294cdfa5b67',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
});

///var config = {
  //method: 'get',
  //url: 'https://shazam.p.rapidapi.com/search?term=kiss the rain&locale=en-US&offset=0&limit=5',
 // headers: { 
   // 'x-rapidapi-key': 'bd75fc219emsh004ef34b5ae8b6ep1f6e74jsnd294cdfa5b67', 
//'x-rapidapi-host': 'shazam.p.rapidapi.com'
 // }
//};

export default instance;