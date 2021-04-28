import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import NetworkLogger from "react-native-network-logger";

import { ME_QUERY } from "../../queries/user";
import theme from "../../theme";

const Home = ({ navigation: { navigate } }) => {
  // const { data, error } = useQuery(AUCTIONS_QUERY);
  const { data: userData, error: userError } = useQuery(ME_QUERY);
  console.log(userData, userError);

  return (
    <SafeAreaView style={{ backgroundColor: theme.BACKGROUND_COLOR }}>
      <View style={styles.root}>
        <NetworkLogger />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.BACKGROUND_COLOR,
    color: theme.COLOR,
    height: "100%",
  },
});

export default Home;
