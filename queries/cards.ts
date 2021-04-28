import { gql } from "apollo-boost";

export const CARDS_AUCTIONS_QUERY = gql`
  query LatestAuctionsForCards($slugs: [String!]!) {
    cards(slugs: $slugs) {
      name
      id
      latestAuction {
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
