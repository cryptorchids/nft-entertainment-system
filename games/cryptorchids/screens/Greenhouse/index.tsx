import useSWRNative from "@nandorojo/swr-react-native";
import React, { ReactElement, useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { FlatGrid } from "react-native-super-grid";

import AuthContext from "../../../../components/AuthContext";
import GridOrchid from "../../components/GridOrchid";
import SeedOrchid from "../../components/SeedOrchid";
import { OrchidItem } from "../../species";
import { tokenFetcher } from "../../swrFetcher";
import theme from "../../theme";

const Greenhouse = ({ route, navigation: { navigate } }) => {
  const { signer } = useContext(AuthContext);

  const { data } = useSWRNative(
    signer ? "ownedTokens" : null,
    tokenFetcher(signer),
    { refreshInterval: 60_000 }
  );

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 16 }}
          data={data}
          renderItem={({ item: orchid }) => (
            <GridOrchid
              key={orchid.token}
              onPress={() => navigate("Specimen", { orchid })}
              orchid={orchid}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export type GreenhouseParamList = {
  Greenhouse: undefined;
  Specimen: { orchid: OrchidItem };
};

const GreenhouseStack = createNativeStackNavigator<GreenhouseParamList>();
const GreenhouseNavigation = (): ReactElement => (
  <GreenhouseStack.Navigator>
    <GreenhouseStack.Screen name="Greenhouse" component={Greenhouse} />
    <GreenhouseStack.Screen name="Specimen" component={SeedOrchid} />
  </GreenhouseStack.Navigator>
);

export default GreenhouseNavigation;
