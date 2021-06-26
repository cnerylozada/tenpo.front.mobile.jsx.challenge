import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { getRestaurants } from "../services/services";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";
import LoadingContent from "./loading-content";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState({
    isLoading: true,
    data: null,
  });
  useEffect(() => {
    (async () => {
      const restaurantsList = await getRestaurants();
      setRestaurants((_) => ({ isLoading: false, data: restaurantsList }));
    })();
  }, []);
  return (
    <>
      <AppText caps weight="bold" size="subHeadline">
        restaurantes
      </AppText>
      {!!restaurants.isLoading ? (
        <LoadingContent height={150} />
      ) : (
        <FlatList
          data={restaurants.data}
          style={{ marginTop: 15 }}
          horizontal
          renderItem={({ item }) => (
            <View>
              <ImageBackground
                source={{ uri: item.imageUrl }}
                style={styles.imageContainer}
              ></ImageBackground>
              <View>
                <AppText>{item.name}</AppText>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name={icons.star} color="yellow" size="small" />
                    <AppText size="small">{item.rating}</AppText>
                  </View>
                  <AppText size="small">{item.deliveryTime}</AppText>
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
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: palette.light,
  },
});

export default Restaurants;
