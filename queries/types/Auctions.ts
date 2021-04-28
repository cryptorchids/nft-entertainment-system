/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Auctions
// ====================================================

export interface Auctions_auctions_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Auctions_auctions_edges_node_card {
  __typename: "Card";
  id: string;
  pictureUrl: string | null;
  xp: number;
}

export interface Auctions_auctions_edges_node_bids_edges_bid {
  __typename: "Bid";
  amount: string;
  createdAt: any;
}

export interface Auctions_auctions_edges_node_bids_edges {
  __typename: "BidEdge";
  /**
   * The item at the end of the edge.
   */
  bid: Auctions_auctions_edges_node_bids_edges_bid | null;
}

export interface Auctions_auctions_edges_node_bids {
  __typename: "BidConnection";
  /**
   * A list of edges.
   */
  edges: (Auctions_auctions_edges_node_bids_edges | null)[] | null;
}

export interface Auctions_auctions_edges_node_bestBid {
  __typename: "Bid";
  amount: string;
  createdAt: any;
}

export interface Auctions_auctions_edges_node {
  __typename: "Auction";
  endDate: any;
  card: Auctions_auctions_edges_node_card;
  /**
   * ID of the object.
   */
  id: string;
  name: string;
  bids: Auctions_auctions_edges_node_bids;
  bidsCount: number;
  bestBid: Auctions_auctions_edges_node_bestBid | null;
  minNextBid: string;
}

export interface Auctions_auctions_edges {
  __typename: "AuctionEdge";
  /**
   * The item at the end of the edge.
   */
  node: Auctions_auctions_edges_node | null;
}

export interface Auctions_auctions {
  __typename: "AuctionConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Auctions_auctions_pageInfo;
  /**
   * A list of edges.
   */
  edges: (Auctions_auctions_edges | null)[] | null;
}

export interface Auctions {
  /**
   * Fetch auctions
   */
  auctions: Auctions_auctions;
}

export interface AuctionsVariables {
  first: number;
  after?: string | null;
}
