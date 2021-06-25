import React from "react";
import { Text } from "react-native";
import { fontSize } from "../styles";
import { getFontFamilyByWeight } from "../utils";

const AppText = ({ children, size = "paragraph", weight, caps }) => {
  return (
    <Text
      style={{
        fontFamily: getFontFamilyByWeight(weight),
        fontSize: fontSize[size],
        textTransform: !!caps ? "uppercase" : "none",
      }}
    >
      {children}
    </Text>
  );
};

export default AppText;
