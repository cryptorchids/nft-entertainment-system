import React from "react";
import { StyleSheet, Text, TextInput as RNInput, View } from "react-native";

import theme from "../../theme";

const Input = React.forwardRef(
  ({ label, style, inputStyle, ...props }: any, ref) => (
    <View style={[styles.root, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNInput
        ref={ref}
        style={[styles.input, inputStyle]}
        {...props}
        placeholderTextColor="#808082"
        keyboardAppearance="dark"
      />
    </View>
  )
);

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
  label: {
    color: "#E3E3E3",
    fontSize: 17,
    marginLeft: 8,
    marginBottom: 8,
  },
  input: {
    borderRadius: 10,
    color: theme.COLOR,
    backgroundColor: "#2C2C2E",
    height: 40,
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 17,
  },
});

export default Input;
