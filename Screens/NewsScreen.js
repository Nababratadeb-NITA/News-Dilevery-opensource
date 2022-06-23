import React, { useContext, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import SingleNews from "../components/SingleNews";
import { AdMobBanner } from "expo-ads-admob";

const NewsScreen = () => {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext);

  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  // console.log(articles && articles[9]);

  return (
    <>
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          firstItem={articles.slice(0, 10).length - 1}
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} darkTheme={darkTheme} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
       <AdMobBanner
       style={styles.discover}
          bannerSize="banner"
          adUnitID="ca-app-pub-3737703030837827/5819565014" 
          servePersonalizedAds
          onDidFailToReceiveAdWithError={this.bannerError} />
          </>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
  discover: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
