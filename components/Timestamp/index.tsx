import {
  differenceInMinutes,
  formatDistanceToNowStrict,
  parseISO,
} from "date-fns";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import Text from "../Text";
const map = {
  " hour": "h",
  " hours": "h",
  " minute": "m",
  " minutes": "m",
  " second": "s",
  " seconds": "s",
};

const timeDistance = (timestamp) => {
  const date = parseISO(timestamp);

  if (differenceInMinutes(new Date(), date) < 1) {
    return "Just started";
  }

  return formatDistanceToNowStrict(date).replace(
    /\sseconds?|\sminutes?|\shours?/,
    (matched) => map[matched]
  );
};

const Timestamp = ({ style, timestamp }: any) => {
  const [inWords, setInWords] = useState(timeDistance(timestamp));

  useEffect(() => {
    const counter = setInterval(() => {
      setInWords(timeDistance(timestamp));
    }, 60000);

    return () => clearInterval(counter);
  }, []);

  return <Text style={[styles.timestamp, style]}>{inWords}</Text>;
};

const styles = StyleSheet.create({
  timestamp: {
    fontSize: 11,
    fontWeight: "normal",
  },
});

export default Timestamp;
