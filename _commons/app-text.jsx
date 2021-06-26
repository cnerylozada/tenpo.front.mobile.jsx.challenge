import React from "react";
import { Text } from "react-native";
import { fontSize, palette } from "../styles";
import { getFontFamilyByWeight } from "../utils";

const AppText = ({
  children,
  size = "paragraph",
  weight,
  caps,
  color = "black",
  styles,
}) => {
  return (
    <Text
      style={{
        fontFamily: getFontFamilyByWeight(weight),
        fontSize: fontSize[size],
        color: palette[color],
        textTransform: !!caps ? "uppercase" : "none",
        ...styles,
      }}
    >
      {children}
    </Text>
  );
};

export default AppText;
