import { gql } from "apollo-boost";

export const ME_QUERY = gql`
  query MeQuery {
    currentUser {
      id
      coinBalance
    }
  }
`;
