import createDataContext from './createDataContext'
import { firebase } from "../firebase"


//Acciones disponibles para el reducer
const favoriteReducer = (state, action) => {

    switch (action.type){
        case "errorMessage":
            return{...state, error: action.payload}
        case "songs":
            return{...state, songs: action.payload}
        case "getFavorites":
            return{...state, favorites: action.payload}
        case "deleteFavorites":
            return {...state, favorites: action.payload}
        default:
            return state
    }
}

//Crear una referencia a la coleccion de proyectos
const favoriteRef = firebase.firestore().collection("songs");

//Almacenar la informacion de la cancion
const createFavorite = (dispatch) => (key, coverart, title, subtitle, user) =>{
    const data = {
        key,
        coverart,
        title,
        subtitle,
        userID: user,
    }

    favoriteRef.add(data).then((_doc)=>{ dispatch({type: "songs", payload: "Song added to favorite"} )}).catch((error) =>{
        dispatch({type: "errorMessage", payload: error.errormessage})
    })
};

const getFavorites = (dispatch) => (userID) =>{
    favoriteRef
    .where("userID", "==", userID)
    //.orderBy("timestamp", "desc")
    .onSnapshot((querySnapshot) =>{
            const favorites = [];

            querySnapshot.forEach((doc) =>{
                const favorite = doc.data();
                favorite.id = doc.id;
                favorites.push(favorite);
            })

            dispatch({type: "getFavorites", payload: favorites});
        }, (error) =>{
            dispatch({type: "errorMessage", payload: error.message});
        }
    );

}

const deleteFavorites = (dispatch) =>(key) =>{
    favoriteRef
    .doc(key)
    .delete()
    .then(() =>
        dispatch({type: "errorMessage", payload: "Favorite has been deleted!"})
    ).catch((error) =>
        dispatch({type: "errorMessage", payload: error.Message})
    )
}


//Exportar las funcionalidades del contexto y el proveedor
export const { Provider, Context } = createDataContext(
    favoriteReducer,
    {
        createFavorite,
        getFavorites,
        deleteFavorites
    },
    {
        errorMessage: null,
        favorites: [],
    }


)