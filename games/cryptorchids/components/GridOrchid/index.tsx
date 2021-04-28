import React, { ReactElement } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Button from "../../../../components/Button";
// import Button from "~components/Button";
// import ButtonLoader from "~components/ButtonLoader";
// import CryptorchidsContext from "~components/ContractContext";
// import DataRow from "~components/DataRow";
// import Ribbon from "~components/Ribbon";
// import useGerminationStarted from "~hooks/useGerminationStarted";
import species, { OrchidItem } from "../../species";
import theme from "../../theme";

const GridOrchid = ({
  onPress,
  orchid,
}: {
  onPress: () => void;
  orchid: OrchidItem;
}): ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.tokenInfo}>
            {/* <Ribbon
            species={orchid}
            style={styles.{ color: "#AA97B1", backgroundColor: "white" }}
          /> */}
            {/* <span style={styles.number} style={styles.{ color: "white" }}>
            #{orchid.token.toString()}
          </span> */}
          </View>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={orchid.stage === "DEAD" ? orchid.imageDead : orchid.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{orchid.name}</Text>
            <Text style={styles.latinName}>{orchid.latinName}</Text>
          </View>
          {/* <DataRow label="Age" value="Not yet planted" /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    position: "relative",
    backgroundColor: "#fff",
    // boxSizing: "border-box",
    // boxShadow: "0 4 12 rgba(0, 0, 0, 0.15)",
    borderRadius: 7,
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "#F5F5F5",
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    paddingVertical: 16,
  },
  tokenInfo: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  number: {},
  image: { width: "100%", height: undefined, aspectRatio: 1, flex: 1 },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 12,
    flexGrow: 1,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
  },
  // infoContainer > p": { marginBottom: 12 },
  nameRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    // borderBottom: "1 solid var(--shadow)",
    marginBottom: 18,
  },
  name: {
    // borderBottom: "1 solid var(--shadow)",
    fontSize: 24,
  },
  // ".nameRow > p:first-of-type": { margin: "0" },
  latinName: {
    color: theme.COLOR_SHADOW,
    fontStyle: "italic",
    fontSize: 20,
    marginBottom: 24,
  },
  button: { marginTop: "auto", marginBottom: 0 },
});

export default GridOrchid;
