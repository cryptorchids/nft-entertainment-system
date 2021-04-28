import { formatDistance } from "date-fns";
import React, { ReactElement } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Button from "../../../../components/Button";
// import Button from "~components/Button";
// import ButtonLoader from "~components/ButtonLoader";
// import CryptorchidsContext from "~components/ContractContext";
// import DataRow from "~components/DataRow";
// import Ribbon from "~components/Ribbon";
// import useGerminationStarted from "~hooks/useGerminationStarted";
import { GROWTH_CYCLE_SECONDS, OrchidItem } from "../../species";
import theme from "../../theme";
import DataRow from "../DataRow";

const SeedOrchid = ({
  route: {
    params: { orchid },
  },
  germinating = false,
}: {
  route: any;
  germinating: boolean;
}): ReactElement => {
  const image = orchid.stage === "DEAD" ? orchid.imageDead : orchid.image;

  const age = () => {
    switch (orchid.stage) {
      case "SEED":
        return "Not yet planted";
      case "DEAD":
        const diedAt =
          orchid.plantedAt.getTime() / 1000 +
          (orchid.waterLevel + 1) * GROWTH_CYCLE_SECONDS;
        const ageAtDeath = formatDistance(
          new Date(diedAt * 1000),
          orchid.plantedAt
        );
        return `Deceased at ${ageAtDeath}`;
        break;
      case "FLOWERING":
        const age = formatDistance(new Date(), orchid.plantedAt);
        return age;
      default:
        break;
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode="center" source={image} />
          <View style={styles.tokenInfo}>
            <View style={{ ...styles.badge, backgroundColor: orchid.color }}>
              <Text style={{ color: orchid.fontColor }}>{orchid.level}</Text>
            </View>
            <Text style={{ ...styles.number, color: orchid.color }}>
              #{orchid.token}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{orchid.name}</Text>
            <Text style={styles.latinName}>{orchid.latinName}</Text>
          </View>
          <DataRow label="Age" value={age()} />

          <Text>
            Germinate this seed to discover the species and start the game!
          </Text>
          <Button
            variant="primary"
            style={styles.button}
            disabled={germinating}
            label={germinating ? "Germinating" : "Germinate"}
          >
            {/* <View style={{ position: "absolute", right: 24 }}>
                {germinating && <ButtonLoader />}
              </View> */}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 16,
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
    justifyContent: "center",
    alignItems: "center",
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
  badge: {
    fontSize: 12,
    textAlign: "center",
    position: "relative",
    padding: 8,
    borderRadius: 4,
  },
  number: {},
  image: { width: "100%", height: 500, aspectRatio: 1, flexShrink: 0 },
  infoContainer: {
    width: "100%",
    padding: 28,
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
    borderBottomColor: theme.COLORS.shadow,
    borderBottomWidth: 1,
    marginBottom: 18,
  },
  name: {
    fontSize: 24,
  },
  latinName: {
    color: theme.COLOR_SHADOW,
    fontStyle: "italic",
    fontSize: 20,
    marginBottom: 24,
  },
  button: { marginTop: 24, marginBottom: 0 },
});

export default SeedOrchid;
