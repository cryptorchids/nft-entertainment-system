import React, { ReactElement, useContext } from "react";
import web3 from "web3-utils";

import CurrencyContext from "../CurrencyContext";
import Text from "../Text";

type PriceObject = {
  eth: number;
  eur: number;
  usd: number;
  gbp: number;
};

type ConvertedTextPriceProps = {
  wei: number;
  currency: keyof PriceObject;
  style: CSSRuleList;
};

export default ({
  wei = 0,
  currency,
  style,
}: ConvertedTextPriceProps): ReactElement => {
  const { rates } = useContext(CurrencyContext);

  const eth = web3.fromWei(String(wei), "ether");

  const conversions = {
    eth: () => parseFloat(eth),
    eur: () => Math.round(parseFloat(eth) * rates?.eur * 100) / 100,
    usd: () => Math.round(parseFloat(eth) * rates?.usd * 100) / 100,
    gbp: () => Math.round(parseFloat(eth) * rates?.gbp * 100) / 100,
  };

  return (
    <Text style={style}>
      {conversions[currency]().toLocaleString("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
      })}{" "}
    </Text>
  );
};
