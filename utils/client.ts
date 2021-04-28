import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-community/async-storage";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        auctions: relayStylePagination(),
      },
    },
  },
});
const httpLink = new HttpLink({
  uri: "https://api.sorare.com/graphql",
  credentials: "include",
});

let authHeader;
const withAuthHeader = setContext(() => {
  if (authHeader) return { authHeader };
  return AsyncStorage.getItem("authHeader").then((authHeader) => {
    authHeader = authHeader;
    return { authHeader };
  });
});

const authorizationMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: operation.getContext().authHeader,
    },
  }));
  return forward(operation);
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([withAuthHeader, authorizationMiddleware, httpLink]),
});

export default client;
