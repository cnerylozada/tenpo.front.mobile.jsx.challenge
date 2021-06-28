import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { getCategories } from "../services";
import { AppText } from "../_commons";
import LoadingContent from "./loading-content";

const Categories = () => {
  const [categories, setCategories] = useState({
    isLoading: true,
    data: null,
  });
  useEffect(() => {
    (async () => {
      const categoriesList = await getCategories();
      setCategories((_) => ({ isLoading: false, data: categoriesList }));
    })();
  }, []);
  return (
    <>
      <AppText caps weight="bold" size="subHeadline">
        categorías
      </AppText>
      {!!categories.isLoading ? (
        <LoadingContent />
      ) : (
        <FlatList
          data={categories.data}
          style={{ marginTop: 15 }}
          horizontal
          renderItem={({ item }) => (
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.imageContainer}
            >
              <AppText caps weight="bold" color="white">
                {item.name}
              </AppText>
            </ImageBackground>
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
    height: 90,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default Categories;
