import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { getFavorites } from "../services";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";
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
        <LoadingContent height={160} />
      ) : (
        <FlatList
          data={favorites.data}
          style={{ marginTop: 15 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <ImageBackground
                source={{ uri: item.imageUrl }}
                style={styles.imageContainer}
              >
                <Image
                  source={{ uri: item.restaurant.imageUrl }}
                  style={styles.image}
                ></Image>
              </ImageBackground>
              <View style={styles.detailContainer}>
                <View style={styles.detail}>
                  <AppText size="small" color="black">
                    {item.name}
                  </AppText>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name={icons.star} size="small" color="yellow" />
                    <AppText size="small" color="black">
                      {item.restaurant.rating}
                    </AppText>
                  </View>
                </View>
                <View style={styles.detail}>
                  <AppText color="green" size="small" weight="bold">
                    {item.restaurant.name}
                  </AppText>
                  <AppText size="small" color="black">
                    {item.restaurant.deliveryTime}
                  </AppText>
                </View>
              </View>
            </View>
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
  container: {
    width: 240,
    borderBottomWidth: 0.8,
    borderColor: palette.gray,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageContainer: {
    height: 120,
  },
  image: {
    width: 35,
    height: 35,
    margin: 7,
  },
  detailContainer: {
    padding: 8,
    backgroundColor: palette.white,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Favorites;
