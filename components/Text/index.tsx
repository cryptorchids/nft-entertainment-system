import React from "react";
import { StyleSheet, Text as RNText } from "react-native";

import theme from "../../theme";

const Text = ({ children, style, ...props }: any) => (
  <RNText style={[styles.root, style]} {...props}>
    {children}
  </RNText>
);

const styles = StyleSheet.create({
  root: {
    color: theme.COLOR,
  },
});

export default Text;
