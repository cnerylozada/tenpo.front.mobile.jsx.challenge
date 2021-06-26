import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { getFavorites } from "../services/services";
import { icons, palette } from "../styles";
import { AppText, Icon } from "../_commons";

const HomeView = () => {
  useEffect(() => {
    getFavorites().then((_) => console.log(_));
  }, []);

  return (
    <View style={styles.container}>
      <AppText size="subHeadline" weight="light">
        Cristian Gerardo abcdefg
      </AppText>
      <Icon name={icons.close} size="small"></Icon>
      <Icon name={icons.gps} size="large"></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
});

export default HomeView;
