/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCard = /* GraphQL */ `
  query GetCard($roomId: ID!, $cardValue: ID!) {
    getCard(roomId: $roomId, cardValue: $cardValue) {
      cardValue
      roomId
      x
      y
      z
      faceUp
      lastOwner
      createdAt
      updatedAt
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $roomId: ID
    $cardValue: ModelIDKeyConditionInput
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCards(
      roomId: $roomId
      cardValue: $cardValue
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        cardValue
        roomId
        x
        y
        z
        faceUp
        lastOwner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($roomId: ID!) {
    getRoom(roomId: $roomId) {
      roomId
      players {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $roomId: ID
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRooms(
      roomId: $roomId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        roomId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      roomId
      playerId
      name
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roomId
        playerId
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const playerbyRoom = /* GraphQL */ `
  query PlayerbyRoom(
    $roomId: ID
    $playerId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playerbyRoom(
      roomId: $roomId
      playerId: $playerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roomId
        playerId
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
