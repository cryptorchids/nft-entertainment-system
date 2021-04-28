import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import theme from "../../theme";
import Text from "../Text";

const Button = ({
  disabled,
  label,
  onPress,
  style,
  labelStyle,
  variant,
}: any) => (
  <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.5}>
    <View
      style={[styles.root, styles[variant], style, disabled && styles.disabled]}
    >
      <Text
        style={[styles.label, labelStyle, disabled && { color: "#8D8D8D" }]}
      >
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    color: theme.COLOR,
    height: 48,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  primary: {
    backgroundColor: theme.COLOR_PRIMARY,
  },
  destructive: {
    backgroundColor: theme.COLOR_DESTRUCTIVE,
  },
  disabled: {
    backgroundColor: "#49498D",
  },
  label: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 17,
  },
});

export default Button;
