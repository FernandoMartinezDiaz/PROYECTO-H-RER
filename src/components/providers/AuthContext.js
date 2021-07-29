import createDataContext from "./createDataContext";
import { firebase } from "../firebase"

//Acciones disponibles para el reducer

const authReducer = (state, action) =>{
    switch (action.type){
        case "signup":
            return {
              ...state,
              user: action.payload.user,
              registered: action.payload.registered,
            };
          case "errorMessage":
            return { ...state, errorMessage: action.payload };
          case "signin":
            return {
              ...state,
              user: action.payload.user,
              loggedIn: action.payload.loggedIn,
            };
          case "persistLogin":
            return {
              ...state,
              user: action.payload.user,
              loggedIn: action.payload.loggedIn,
              loading: action.payload.loading,
            };
          case "signout":
            return {
              ...state,
              user: action.payload.user,
              loggedIn: action.payload.loggedIn,
            };
          default:
            return state;
};

//Funciones
const signup = (dispatch) =>(fullname, email, password) =>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((response)=>{
        console.log("usuario creado"); 
    })
};

//Exportar las funcionalidades del contexto
export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signup,
    },
    {
        user:{},
    }
);