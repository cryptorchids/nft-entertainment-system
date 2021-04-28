import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React, { ReactElement } from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Greenhouse from "./screens/Greenhouse";
import Nursery from "./screens/Nursery";

type TabStackParamList = {
  Nursery: undefined;
  Greenhouse: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const CryptOrchidsTabs = (): ReactElement | null => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }): BottomTabNavigationOptions => {
          return {
            tabBarIcon: ({ focused, color, size }): ReactElement => {
              let iconName = "";

              switch (route.name) {
                case "Nursery":
                  iconName = focused ? "pricetags" : "pricetags-outline";
                  break;
                case "Greenhouse":
                  iconName = focused ? "flower" : "flower-outline";
                  break;
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          };
        }}
        tabBarOptions={{
          activeTintColor: "#007AFF",
          inactiveTintColor: "#A3A3A3",
        }}
      >
        <Tab.Screen name="Greenhouse" component={Greenhouse} />
        <Tab.Screen name="Nursery" component={Nursery} />
      </Tab.Navigator>
    </>
  );
};

export default CryptOrchidsTabs;
