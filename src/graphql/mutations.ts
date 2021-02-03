/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      gameType
      players {
        nextToken
      }
      card {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      gameType
      players {
        nextToken
      }
      card {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      gameType
      players {
        nextToken
      }
      card {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMoveable = /* GraphQL */ `
  mutation CreateMoveable(
    $input: CreateMoveableInput!
    $condition: ModelMoveableConditionInput
  ) {
    createMoveable(input: $input, condition: $condition) {
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
export const updateMoveable = /* GraphQL */ `
  mutation UpdateMoveable(
    $input: UpdateMoveableInput!
    $condition: ModelMoveableConditionInput
  ) {
    updateMoveable(input: $input, condition: $condition) {
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
export const deleteMoveable = /* GraphQL */ `
  mutation DeleteMoveable(
    $input: DeleteMoveableInput!
    $condition: ModelMoveableConditionInput
  ) {
    deleteMoveable(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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
export const createCardStack = /* GraphQL */ `
  mutation CreateCardStack(
    $input: CreateCardStackInput!
    $condition: ModelCardStackConditionInput
  ) {
    createCardStack(input: $input, condition: $condition) {
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
export const updateCardStack = /* GraphQL */ `
  mutation UpdateCardStack(
    $input: UpdateCardStackInput!
    $condition: ModelCardStackConditionInput
  ) {
    updateCardStack(input: $input, condition: $condition) {
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
export const deleteCardStack = /* GraphQL */ `
  mutation DeleteCardStack(
    $input: DeleteCardStackInput!
    $condition: ModelCardStackConditionInput
  ) {
    deleteCardStack(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
