import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

import theme from "../../theme";

const DataRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}): ReactElement => (
  <View style={styles.dataRowContainer}>
    <Text style={styles.dataLabel}>{label}:</Text>
    <Text>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  dataRowContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 16,
  },

  dataLabel: {
    color: theme.COLORS.shadow,
    fontSize: 12,
  },
});

export default DataRow;
