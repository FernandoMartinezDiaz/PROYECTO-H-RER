import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore"
import getEnvVars from "../../../Enviroment";

const{
    apiKey,
    authDomain,projectId,
    storageBucket,
    messagingSenderId,
    appId
} = getEnvVars();

//Pasar los vavlores de las keys a Firebase

const firebaseConfig ={
    apiKey,
    authDomain,projectId,
    storageBucket,
    messagingSenderId,
    appId
};

//Iniciar la conexion a firebase si no se ha realizado previamente

if(!firebase.app.length) firebase.initializeApp(firebaseConfig);

return (
    <NavigationContainer>
      {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="CreateProject" component={CreateProject} />
              <Stack.Screen name="AddTask" component={AddTask} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
}

export{ firebase };