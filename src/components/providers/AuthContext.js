import createDataContext from "./createDataContext";
import { firebase } from "../firebase"

//Acciones disponibles para el reducer

const authReducer = (state, action) =>{
    switch (action.type){
        case "signup":
            return { 
                ...state, 
                user: action.payload.user, 
                registered: action.payload.registered 
            };
        case "errorMessage":
            return { 
                ...state, 
                errorMessage: 
                action.payload 
            }
        case "signin":
            return {
                ...state,
                user: action.payload,
                loggedIn: action.payload.loggedIn };
        case "persistLogin":
            return {
                ...state,
                user: action.payload.user,
                loggedIn: action.payload.loggedIn,
                loading: action.payload.loading
            };
        case "signout":
            return {
                ...state,
                user: action.payload.user,
                loggedIn: action.payload.loggedIn,
            }
        default:
            return state;
    }
};

//Funciones
const signup = (dispatch) =>(fullname, email, password) =>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((response)=>{
        //Obtener el Unique Identifier (UID) generado para cada usuario
        //Firebase ---> Authentification
        const uid = response.user.uid;

        //Construir el objeto que se va a almacenar a la collecion "users"
        const data ={
            id: uid,
            email,
            fullname
        }

        //Obtener la coleccion donde se alamacenara la informacion
        const usersRef = firebase.firestore().collection("users");

        // Almacenar la informacion
        usersRef
        .doc(uid)
        .set(data)
        .then(() => {
            dispatch({
                type: "signup",
                payload: { user: data, registered: true}
            });
        })
        .catch((error) =>{
            dispatch({type: "errorMessage", payload: error.message})
        })
    })
    .catch((error) =>{
        dispatch({type: "errorMessage", payload: error.message})
    })
};

const signin = (dispatch) => (email, password) =>{
    //Realizar la peticion de autenticacion a Firebase

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) =>{
        //Obtener el UID para obetener los datos del usuario
        const uid = response.user.uid

        //Realizar una busqueda en Firestore
        const usersRef = firebase.firestore().collection("users");

        usersRef
        .doc(uid)
        .get()
        .then((firestoreDocument) =>{
            if(!firestoreDocument.exists){
                dispatch({ type: "errorMessage", payload: "User does not exist on Horer!"});
            }else{
                dispatch({
                    type: "signin", 
                    payload: {user: firestoreDocument.data(), loggedIn: true},
                 });
                dispatch({ type: "errorMessage", payload: null});
            }
        })
    }).catch((error) =>{
        dispatch({ type: "errorMessage", payload: error.message });
    });
}

const persistLogin = (dispatch) => () => {
    // Verificar si existe un token de firebase para iniciar sesión sin credenciales
    const usersRef = firebase.firestore().collection("users");
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Aún posee acceso al token o un token válido
        usersRef
          .doc(user.uid)
          .get()
          .then((response) => {
            dispatch({
              type: "persistLogin",
              payload: { user: response.data(), loggedIn: true, loading: false },
            });
          })
          .catch((error) => {
            dispatch({ type: "errorMessage", payload: error.message });
          });
      } else {
        // Token no es válido o ha expirado
        dispatch({
          type: "persistLogin",
          payload: { user: {}, loggedIn: false },
        });
      }
    });
  };

const signout = (dispatch) => () => {
    // Cerrar la sesión del usuario. Esto elimina el token.
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "signout", payload: { user: {}, loggedIn: false } });
      })
      .catch((error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      });
  };


//Exportar las funcionalidades del contexto
export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signup,
        signin,
        persistLogin,
        signout
    },
    {
        user:{},
        errorMessage: null,
        registered: false,
        loggedIn: false,
        loading: true
    }
);