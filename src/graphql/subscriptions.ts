/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreateMoveable = /* GraphQL */ `
  subscription OnCreateMoveable {
    onCreateMoveable {
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
export const onUpdateMoveable = /* GraphQL */ `
  subscription OnUpdateMoveable {
    onUpdateMoveable {
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
export const onDeleteMoveable = /* GraphQL */ `
  subscription OnDeleteMoveable {
    onDeleteMoveable {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
