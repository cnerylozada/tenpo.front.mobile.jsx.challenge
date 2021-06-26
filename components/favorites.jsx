import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { getFavorites } from "../services/services";
import { AppText } from "../_commons";
import LoadingContent from "./loading-content";

const Favorites = () => {
  const [favorites, setFavorites] = useState({
    isLoading: true,
    data: null,
  });
  useEffect(() => {
    (async () => {
      const favoritesList = await getFavorites();
      setFavorites((_) => ({ isLoading: false, data: favoritesList }));
    })();
  }, []);
  return (
    <>
      <AppText caps weight="bold" size="subHeadline">
        tus favoritos
      </AppText>
      {!!favorites.isLoading ? (
        <LoadingContent height={140} />
      ) : (
        <FlatList
          data={favorites.data}
          style={{ marginTop: 15 }}
          horizontal
          renderItem={({ item }) => (
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.imageContainer}
            ></ImageBackground>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ marginRight: 10 }}></View>
          )}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    height: 140,
    width: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default Favorites;
