import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { icons, palette, customShadow } from "../styles";
import AppText from "./app-text";
import Icon from "./icon";

const AppInput = ({
  value = "742 de Evergreen Terrace Springfield Oregon- USA",
  showCloseIcon,
}) => {
  return (
    <View style={styles.container}>
      <AppText styles={{ width: "90%" }} color="green" numberOfLines={1}>
        {value}
      </AppText>
      {!!showCloseIcon && <Icon name={icons.close} size="small" color="gray" />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 30,
    backgroundColor: palette.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    ...customShadow,
  },
});
export default AppInput;
