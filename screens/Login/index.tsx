import { Wallet } from "@ethersproject/wallet";
import React, { useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WALLET_PRIVATE_KEY } from "react-native-dotenv";

import AuthContext from "../../components/AuthContext";
import Button from "../../components/Button";
import theme from "../../theme";

const Login = ({ navigation: { navigate } }) => {
  const { setCredentials, walletAddress } = useContext(AuthContext);

  const importWallet = (privateKey) => {
    const wallet = new Wallet(privateKey);
    if (wallet) setCredentials(privateKey, wallet.address);
  };

  useEffect(() => {
    if (walletAddress) {
      navigate("AppTabs", { screen: "Home" });
    }
  }, [walletAddress, navigate]);

  return (
    <SafeAreaView style={{ backgroundColor: theme.BACKGROUND_COLOR }}>
      <View style={styles.root}>
        <Button
          variant="secondary"
          label="Watch Wallet"
          onPress={() => {
            console.warn("watch");
          }}
        />
        <Button
          variant="primary"
          label="Import Wallet"
          onPress={() => importWallet(WALLET_PRIVATE_KEY)}
        />
        {/* <NetworkLogger /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.BACKGROUND_COLOR,
    // color: "#fff",
    height: "100%",
    width: "100%",
  },
});

export default Login;
