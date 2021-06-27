import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../_commons";

const AccountView = () => {
  return (
    <View styles={styles.container}>
      <AppText>Account view</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccountView;
