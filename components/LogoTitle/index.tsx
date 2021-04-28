import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

import Logo from "../../resources/Logo";
import theme from "../../theme";
import LogoMask from "../LogoMask";

const LogoTitle = () => {
  const [count, setCount] = useState(8);

  useEffect(() => {
    if (count <= 0) return;
    const countdown = setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => clearTimeout(countdown);
  }, [count]);

  const animation = new Animated.Value(0);

  useEffect(() => {
    if (count === 0) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {
          setCount(-1);
        });
      });
    }
  }, [count, animation]);

  const color = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 128, 128)", "rgb(255,255,255)"],
  });

  return (
    <View style={styles.navbar}>
      <View style={styles.logo}>
        <View>
          <Logo />
        </View>

        <LogoMask count={count} />
      </View>
      <Animated.Text
        style={[
          styles.header,
          {
            color,
          },
        ]}
      >
        Gametime
      </Animated.Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#1B1B1B",
    display: "flex",
    flexDirection: "row",
    marginBottom: 6,
  },
  logo: {
    width: 32,
    marginHorizontal: 12,
  },
  header: {
    fontFamily: "BlackOpsOne-Regular",
    fontSize: 24,
    textAlign: "left",
  },
});
