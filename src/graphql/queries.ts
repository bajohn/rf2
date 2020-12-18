/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($uuid: ID!) {
    getRoom(uuid: $uuid) {
      uuid
      gameType
      moveables {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $uuid: ID
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRooms(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        uuid
        gameType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMoveable = /* GraphQL */ `
  query GetMoveable($uuid: ID!, $roomId: ID!) {
    getMoveable(uuid: $uuid, roomId: $roomId) {
      uuid
      roomId
      draggable
      x
      y
      z
      lastOwner
      inMotion
      type
      createdAt
      updatedAt
    }
  }
`;
export const listMoveables = /* GraphQL */ `
  query ListMoveables(
    $uuid: ID
    $roomId: ModelIDKeyConditionInput
    $filter: ModelMoveableFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMoveables(
      uuid: $uuid
      roomId: $roomId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        uuid
        roomId
        draggable
        x
        y
        z
        lastOwner
        inMotion
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
      id
      roomId
      ownerId
      faceUp
      cardValue
      createdAt
      updatedAt
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $id: ID
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCards(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        roomId
        ownerId
        faceUp
        cardValue
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
      name
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $id: ID
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        roomId
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const moveableByRoom = /* GraphQL */ `
  query MoveableByRoom(
    $roomId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMoveableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moveableByRoom(
      roomId: $roomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        uuid
        roomId
        draggable
        x
        y
        z
        lastOwner
        inMotion
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
