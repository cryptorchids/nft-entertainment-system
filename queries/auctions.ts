import { gql } from "apollo-boost";

export const AUCTIONS_QUERY = gql`
  query Auctions($first: Int!, $after: String) {
    auctions(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          endDate
          currentPrice
          card {
            id
            pictureUrl
            xp
          }
          id
          name
          bids {
            edges {
              bid: node {
                amount
                createdAt
              }
            }
          }
          bidsCount
          bestBid {
            amount
            createdAt
          }
          minNextBid
        }
      }
    }
  }
`;
