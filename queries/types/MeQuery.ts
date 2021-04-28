/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_currentUser {
  __typename: "CurrentUser";
  id: string;
  email: string;
  coinBalance: number;
}

export interface MeQuery {
  /**
   * Fetch the current user.
   */
  currentUser: MeQuery_currentUser | null;
}
