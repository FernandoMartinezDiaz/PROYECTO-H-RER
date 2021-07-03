import axios from "axios";
import getEnvVars from  "../../Enviroment"

const { apiUrl } = getEnvVars();

//Intancia de conexion
const instance =axios.create( {
  method: 'get',
  url: apiUrl ,
  headers: { 
    'x-rapidapi-key': 'bd75fc219emsh004ef34b5ae8b6ep1f6e74jsnd294cdfa5b67', 
    'x-rapidapi-host': 'shazam.p.rapidapi.com'
  }
});
//axios(instance)
//.then(function (response) {
 // console.log(JSON.stringify(response.data));
//})


export default instance;