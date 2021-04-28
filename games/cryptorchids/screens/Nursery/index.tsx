import { useQuery } from "@apollo/react-hooks";
import React from "react";
import Countdown from "react-countdown";
import { SafeAreaView, StyleSheet, View } from "react-native";

// import ConvertedPriceText from "../../components/ConvertedPriceText";
// import Image from "../../components/Image";
// import Text from "../../components/Text";
// import { AUCTION_QUERY } from "../../queries/auction";
import theme from "../../theme";
// import relativeTime from "../../utils/relativeTime";

const Nursery = ({ route, navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View style={styles.root} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    // color: theme.COLOR,
  },
  cardImage: {
    width: "100%",
    height: 400,
  },

  label: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
  },
});

export default Nursery;
