import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text } from "react-native";
import { Dot } from "../_commons";
import { SlideOne, SlideThree, SlideTwo } from "./cover-view-slides";

const { width } = Dimensions.get("window");
const height = width * 0.4;
const slides = [<SlideOne />, <SlideTwo />, <SlideThree />];

const CoverView = () => {
  const [indexActive, setIndexActive] = useState(0);

  const onScroll = (_) => {
    const item = Math.ceil(_.contentOffset.x / _.layoutMeasurement.width);
    if (item !== indexActive) setIndexActive(item);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={{ width, height }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(_) => onScroll(_.nativeEvent)}
      >
        {slides.map((_, index) => (
          <View key={index} style={styles.slides}>
            {_}
          </View>
        ))}
      </ScrollView>
      <View style={styles.slideItem}>
        {new Array(slides.length).fill(null).map((_, index) => (
          <View key={index} style={{ marginLeft: 2.5 }}>
            <Dot isActive={indexActive === index} />
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  slides: {
    width,
    height,
  },
  slideItem: {
    position: "absolute",
    flexDirection: "row",
    bottom: 6,
    right: 9,
  },
});

export default CoverView;
