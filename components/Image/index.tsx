import React from "react";
import FastImage from "react-native-fast-image";

const Image = (props: any) => (
  <FastImage
    {...props}
    source={{
      ...props.source,
      headers: { "Cache-Control": "max-age: 31536000, immutable" },
    }}
  />
);

export default Image;
