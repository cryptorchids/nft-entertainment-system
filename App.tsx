/**
 * NFT Arcade React Native App
 * https://github.com/facebook/react-native
 *
 *
 * @format
 */
import "react-native-gesture-handler";
import "@ethersproject/shims";

import { ApolloProvider } from "@apollo/react-hooks";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { startNetworkLogging } from "react-native-network-logger";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import { AuthContextProvider } from "./components/AuthContext";
import { CurrencyContextProvider } from "./components/CurrencyContext";
import CryptOrchidsTabs from "./games/cryptorchids/Tabs";
import Login from "./screens/Login";
import Tabs from "./Tabs";
import client from "./utils/client";

enableScreens();
startNetworkLogging();

const AppStack = createNativeStackNavigator();

const App = () => (
  <AuthContextProvider>
    <ApolloProvider client={client}>
      <CurrencyContextProvider>
        <NavigationContainer>
          <AppStack.Navigator>
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen
              name="AppTabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <AppStack.Screen
              name="CryptOrchidsTabs"
              component={CryptOrchidsTabs}
              options={{ headerShown: false }}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      </CurrencyContextProvider>
    </ApolloProvider>
  </AuthContextProvider>
);

export default App;
