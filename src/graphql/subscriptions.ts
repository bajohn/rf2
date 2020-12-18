/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreateMoveable = /* GraphQL */ `
  subscription OnCreateMoveable {
    onCreateMoveable {
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
export const onUpdateMoveable = /* GraphQL */ `
  subscription OnUpdateMoveable {
    onUpdateMoveable {
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
export const onDeleteMoveable = /* GraphQL */ `
  subscription OnDeleteMoveable {
    onDeleteMoveable {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      roomId
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      roomId
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      roomId
      name
      createdAt
      updatedAt
    }
  }
`;
