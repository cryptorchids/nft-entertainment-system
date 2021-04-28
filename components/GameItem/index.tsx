import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import theme from "../../theme";
import Image from "../Image";

const GameItem = ({ game, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.root}>
        {game.image}
        <Text>{game.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    color: theme.COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 240,
  },

  label: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
  },
});

export default GameItem;
