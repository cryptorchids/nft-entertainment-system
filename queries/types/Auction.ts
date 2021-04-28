/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Auction
// ====================================================

export interface Auction_node_Announcement {
  __typename: "Announcement" | "Bid" | "BundledAuction" | "Card" | "CardOffer" | "Club" | "Competition" | "Contract" | "Country" | "Deck" | "DeckCard" | "Game" | "MintingQuotaAllocation" | "Offer" | "Pack" | "Player" | "Referral" | "SingleBuyOfferMinPrice" | "SingleSaleOffer" | "Skin" | "So5Appearance" | "So5Fixture" | "So5Game" | "So5League" | "So5Lineup" | "So5Ranking" | "So5Reward" | "So5Score";
  /**
   * ID of the object.
   */
  id: string;
}

export interface Auction_node_Auction_card {
  __typename: "Card";
  id: string;
  name: string;
}

export interface Auction_node_Auction {
  __typename: "Auction";
  /**
   * ID of the object.
   */
  id: string;
  currentPrice: string;
  open: boolean;
  endDate: any;
  card: Auction_node_Auction_card;
}

export type Auction_node = Auction_node_Announcement | Auction_node_Auction;

export interface Auction {
  /**
   * Fetches an object given its ID.
   */
  node: Auction_node | null;
}

export interface AuctionVariables {
  id: string;
}
