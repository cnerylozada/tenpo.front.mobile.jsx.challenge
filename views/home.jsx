import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { LoadingContent } from "../components";
import {
  getCategories,
  getFavorites,
  getRestaurants,
} from "../services/services";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";

const HomeView = () => {
  const [categories, setCategories] = useState({
    isLoading: true,
    data: null,
  });
  useEffect(() => {
    (async () => {
      const categoriesList = await getCategories();
      setCategories((_) => ({ isLoading: true, data: categoriesList }));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <AppText caps weight="bold">
        categoría
      </AppText>
      {!!categories.isLoading ? (
        <LoadingContent />
      ) : (
        <View>
          <AppText>{JSON.stringify(categories.data)}</AppText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    paddingHorizontal: 18,
  },
});

export default HomeView;
