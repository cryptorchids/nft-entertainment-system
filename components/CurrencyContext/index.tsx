import { gql, useQuery } from "@apollo/react-hooks";
import React, { Context, ReactElement, ReactNode } from "react";

type CurrencyContextObject = Context<{
  rates: Record<string, number>;
}>;

const CurrencyContext: CurrencyContextObject = React.createContext({
  rates: null,
});

type Props = {
  children: ReactNode;
};

const CONFIG_QUERY = gql`
  query Config {
    config {
      algoliaIndexSuffix
      exchangeRate {
        id
        rate
        rates
        weiRate
      }
    }
  }
`;

const CurrencyContextProvider = ({ children }: Props): ReactElement => {
  const { data } = useQuery(CONFIG_QUERY, { pollInterval: 60_000 });
  return (
    <CurrencyContext.Provider
      value={{ rates: data?.config?.exchangeRate?.rates?.eth }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export { CurrencyContextProvider };

export default CurrencyContext;
