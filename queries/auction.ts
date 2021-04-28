import { gql } from "apollo-boost";

export const AUCTION_QUERY = gql`
  query Auction($id: ID!) {
    node(id: $id) {
      id
      ... on Auction {
        id
        endDate
        currentPrice
        card {
          id
          pictureUrl
          xp
        }
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
`;
