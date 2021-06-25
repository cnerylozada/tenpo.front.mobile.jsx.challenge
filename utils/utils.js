export const getFontFamilyByWeight = (weight) => {
  let fontFamily;
  switch (weight) {
    case "bold":
      fontFamily = "Lato_700Bold";
      break;
    case "regular":
      fontFamily = "Lato_400Regular";
      break;
    case "light":
      fontFamily = "Lato_300Light";
      break;
  }
  return fontFamily;
};
