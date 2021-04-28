import React, { ReactElement } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { FlatGrid } from "react-native-super-grid";

import GameItem from "../../components/GameItem";
import theme from "../../theme";

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.BACKGROUND_COLOR,
    color: theme.COLOR,
    height: "100%",
  },
  gameImage: {
    width: "100%",
    height: 240,
  },
});

const data = [
  {
    name: "CryptOrchids",
    navigationRoot: "CryptOrchidsTabs",
    image: (
      <Image
        resizeMode="contain"
        source={require("../../resources/games/cryptorchids.png")}
        style={styles.gameImage}
      />
    ),
  },
  {
    name: "Dumpling Pets",
    navigationRoot: "CryptOrchidsTabs",
    image: (
      <Image
        resizeMode="contain"
        source={require("../../resources/games/dumplingpets.png")}
        style={styles.gameImage}
      />
    ),
  },
  {
    name: "Ether Freakers",
    navigationRoot: "CryptOrchidsTabs",
    image: (
      <Image
        resizeMode="contain"
        source={require("../../resources/games/etherfreakers.png")}
        style={styles.gameImage}
      />
    ),
  },
];

const Games = ({ navigation: { navigate } }): ReactElement | null => {
  return (
    <SafeAreaView>
      <FlatGrid
        itemDimension={150}
        data={data}
        renderItem={({ item }) => (
          <GameItem onPress={() => navigate(item.navigationRoot)} game={item} />
        )}
      />
    </SafeAreaView>
  );
};

export type GamesParamList = {
  Games: undefined;
};

const GamesStack = createNativeStackNavigator<GamesParamList>();
const GamesNavigation = (): ReactElement => (
  <GamesStack.Navigator>
    <GamesStack.Screen name="Games" component={Games} />
  </GamesStack.Navigator>
);

export default GamesNavigation;
