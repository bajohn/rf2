/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      gameType
      players {
        nextToken
      }
      card {
        nextToken
      }
      cardStacks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $id: ID
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRooms(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        gameType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMoveable = /* GraphQL */ `
  query GetMoveable($id: ID!) {
    getMoveable(id: $id) {
      id
      draggable
      x
      y
      z
      lastOwner
      inMotion
      createdAt
      updatedAt
    }
  }
`;
export const listMoveables = /* GraphQL */ `
  query ListMoveables(
    $id: ID
    $filter: ModelMoveableFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMoveables(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        draggable
        x
        y
        z
        lastOwner
        inMotion
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
      moveable {
        id
        draggable
        x
        y
        z
        lastOwner
        inMotion
        createdAt
        updatedAt
      }
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
export const getCardStack = /* GraphQL */ `
  query GetCardStack($id: ID!) {
    getCardStack(id: $id) {
      id
      roomId
      moveable {
        id
        draggable
        x
        y
        z
        lastOwner
        inMotion
        createdAt
        updatedAt
      }
      cardIds
      createdAt
      updatedAt
    }
  }
`;
export const listCardStacks = /* GraphQL */ `
  query ListCardStacks(
    $id: ID
    $filter: ModelCardStackFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCardStacks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        roomId
        cardIds
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
      moveable {
        id
        draggable
        x
        y
        z
        lastOwner
        inMotion
        createdAt
        updatedAt
      }
      cards {
        nextToken
      }
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
export const cardsByRoom = /* GraphQL */ `
  query CardsByRoom(
    $roomId: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cardsByRoom(
      roomId: $roomId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
export const cardsByOwner = /* GraphQL */ `
  query CardsByOwner(
    $ownerId: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cardsByOwner(
      ownerId: $ownerId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
export const stacksByRoom = /* GraphQL */ `
  query StacksByRoom(
    $roomId: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCardStackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stacksByRoom(
      roomId: $roomId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roomId
        cardIds
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const playersByRoom = /* GraphQL */ `
  query PlayersByRoom(
    $roomId: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playersByRoom(
      roomId: $roomId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
