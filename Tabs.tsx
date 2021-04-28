import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React, { ReactElement } from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Games from "./screens/Games";
import Home from "./screens/Home";

type TabStackParamList = {
  Games: undefined;
  Search: undefined;
  Debug: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const Tabs = (): ReactElement | null => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }): BottomTabNavigationOptions => {
          return {
            tabBarIcon: ({ focused, color, size }): ReactElement => {
              let iconName = "";

              switch (route.name) {
                case "Games":
                  iconName = focused
                    ? "game-controller"
                    : "game-controller-outline";
                  break;

                case "Search":
                  iconName = focused ? "search" : "search-outline";
                  break;
                case "Debug":
                  iconName = focused ? "bug" : "bug-outline";
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
        <Tab.Screen name="Games" component={Games} />
        <Tab.Screen name="Debug" component={Home} />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
