/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard($roomId: String, $cardValue: String) {
    onUpdateCard(roomId: $roomId, cardValue: $cardValue) {
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
export const onUpdateCardRoom = /* GraphQL */ `
  subscription OnUpdateCardRoom($roomId: String) {
    onUpdateCardRoom(roomId: $roomId) {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      roomId
      players {
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
      roomId
      players {
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
      roomId
      players {
        nextToken
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
      playerId
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
      playerId
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
      playerId
      name
      createdAt
      updatedAt
    }
  }
`;
