import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { icons, palette } from "../styles";
import Icon from "./icon";

const AppInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mockInput} numberOfLines={1}>
        742 de Evergreen Terrace Springfield Oregon- USA
      </Text>
      <Icon name={icons.close} size="small" color="gray" />
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  mockInput: {
    color: palette.green,
    width: "90%",
  },
});
export default AppInput;
