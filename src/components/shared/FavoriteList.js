import React from "react";
import { FlatList, StyleSheet, View, SafeAreaView  } from "react-native";
import { Text } from "react-native-paper";
import Favorites from "./Favorites";


function FavoriteList({ favorites, navigation }) {

    const emptyFlatList = (
        <View style={styles.emptyFavorites}>
          <Text style={styles.text}>You don't have any favorites yet...</Text>
        </View>
      );

    return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        ListEmptyComponent={emptyFlatList}
        numColumns={1}
        renderItem={({ item }) => (
          <>
            <Favorites 
            navigation={navigation}
            uid={item.id}
            id={item.key} 
            title={item.title} 
            subtitle={item.subtitle} 
            image={item.coverart}/>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    emptyFavorites: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
    },
    text:{
      color: "white"
    }
  });

  export default FavoriteList;