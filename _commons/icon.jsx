import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { iconSize, palette } from "../styles";

const Icon = ({ name, size = "regular", color = "black" }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={iconSize[size]}
      color={palette[color]}
    />
  );
};

export default Icon;
