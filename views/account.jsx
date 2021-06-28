import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../auth";
import { AppText } from "../_commons";

const AccountView = () => {
  const { user } = useContext(AuthContext);

  return (
    <View styles={styles.container}>
      <AppText>Account view {user.names}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccountView;
