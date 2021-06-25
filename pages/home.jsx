import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { icons, iconSize, palette } from "../styles";
import { AppText, Icon } from "../_commons";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <AppText size="subHeadline" weight="light">
        Cristian Gerardo abcdefg
      </AppText>
      <Icon name={icons.check}></Icon>
      <Icon name={icons.close} size="small"></Icon>
      <Icon name={icons.gps} size="large"></Icon>
      <Icon name={icons.map}></Icon>
      <Icon name={icons.search} size="large"></Icon>
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
