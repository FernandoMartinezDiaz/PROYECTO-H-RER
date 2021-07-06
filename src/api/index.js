//importacion de libreria axions ,necesitamos antes instalar su libreria para
//poder importarlo y implementarlo
import axios from "axios";
import getEnvVars from  "../../Enviroment"


const { apiUrl } = getEnvVars();

//Intancia de conexion
const instance = axios.create( {
  method: 'get',
  url: apiUrl ,
  headers: { 
    'x-rapidapi-key': '8375b723admsh443865d6bbe56c3p19caacjsnbcdac55c8c6a', 
    'x-rapidapi-host': 'shazam.p.rapidapi.com'
  }
});
//axios(instance)
//.then(function (response) {
 // console.log(JSON.stringify(response.data));
//})


export default instance;