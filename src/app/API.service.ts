/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateCardInput = {
  id?: string | null;
  roomId: string;
  cardValue: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  lastOwner: string;
};

export type ModelCardConditionInput = {
  roomId?: ModelIDInput | null;
  cardValue?: ModelIDInput | null;
  x?: ModelIntInput | null;
  y?: ModelIntInput | null;
  z?: ModelIntInput | null;
  faceUp?: ModelBooleanInput | null;
  lastOwner?: ModelIDInput | null;
  and?: Array<ModelCardConditionInput | null> | null;
  or?: Array<ModelCardConditionInput | null> | null;
  not?: ModelCardConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateCardInput = {
  roomId?: string | null;
  cardValue?: string | null;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  faceUp?: boolean | null;
  lastOwner?: string | null;
};

export type DeleteCardInput = {
  id?: string | null;
};

export type CreateRoomInput = {
  roomId: string;
};

export type ModelRoomConditionInput = {
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
};

export type UpdateRoomInput = {
  roomId: string;
};

export type DeleteRoomInput = {
  roomId: string;
};

export type CreatePlayerInput = {
  id?: string | null;
  roomId: string;
  playerId: string;
  name: string;
};

export type ModelPlayerConditionInput = {
  roomId?: ModelIDInput | null;
  playerId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPlayerConditionInput | null> | null;
  or?: Array<ModelPlayerConditionInput | null> | null;
  not?: ModelPlayerConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePlayerInput = {
  roomId?: string | null;
  playerId?: string | null;
  name?: string | null;
};

export type DeletePlayerInput = {
  id?: string | null;
};

export type ModelCardFilterInput = {
  roomId?: ModelIDInput | null;
  cardValue?: ModelIDInput | null;
  x?: ModelIntInput | null;
  y?: ModelIntInput | null;
  z?: ModelIntInput | null;
  faceUp?: ModelBooleanInput | null;
  lastOwner?: ModelIDInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
};

export type ModelRoomFilterInput = {
  roomId?: ModelIDInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelPlayerFilterInput = {
  roomId?: ModelIDInput | null;
  playerId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPlayerFilterInput | null> | null;
  or?: Array<ModelPlayerFilterInput | null> | null;
  not?: ModelPlayerFilterInput | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateCardMutation = {
  __typename: "Card";
  id: string;
  roomId: string;
  cardValue: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  lastOwner: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardMutation = {
  __typename: "Card";
  id: string;
  roomId: string;
  cardValue: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  lastOwner: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardMutation = {
  __typename: "Card";
  id: string;
  roomId: string;
  cardValue: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  lastOwner: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomMutation = {
  __typename: "Room";
  roomId: string;
  players: {
    __typename: "ModelPlayerConnection";
    items: Array<{
      __typename: "Player";
      id: string;
      roomId: string;
      playerId: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      roomId: string;
      cardValue: string;
      x: number;
      y: number;
      z: number;
      faceUp: boolean;
      lastOwner: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  roomId: string;
  players: {
    __typename: "ModelPlayerConnection";
    items: Array<{
      __typename: "Player";
      id: string;
      roomId: string;
      playerId: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      roomId: string;
      cardValue: string;
      x: number;
      y: number;
      z: number;
      faceUp: boolean;
      lastOwner: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  roomId: string;
  players: {
    __typename: "ModelPlayerConnection";
    items: Array<{
      __typename: "Player";
      id: string;
      roomId: string;
      playerId: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      roomId: string;
      cardValue: string;
      x: number;
      y: number;
      z: number;
      faceUp: boolean;
      lastOwner: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePlayerMutation = {
  __typename: "Player";
  id: string;
  roomId: string;
  playerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePlayerMutation = {
  __typename: "Player";
  id: string;
  roomId: string;
  playerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePlayerMutation = {
  __typename: "Player";
  id: string;
  roomId: string;
  playerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetCardQuery = {
  __typename: "Card";
  id: string;
  roomId: string;
  cardValue: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  lastOwner: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    roomId: string;
    cardValue: string;
    x: number;
    y: number;
    z: number;
    faceUp: boolean;
    lastOwner: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  roomId: string;
  players: {
    __typename: "ModelPlayerConnection";
    items: Array<{
      __typename: "Player";
      id: string;
      roomId: string;
      playerId: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      roomId: string;
      cardValue: string;
      x: number;
      y: number;
      z: number;
      faceUp: boolean;
      lastOwner: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    roomId: string;
    players: {
      __typename: "ModelPlayerConnection";
      nextToken: string | null;
    } | null;
    cards: {
      __typename: "ModelCardConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPlayerQuery = {
  __typename: "Player";
  id: string;
  roomId: string;
  playerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPlayersQuery = {
  __typename: "ModelPlayerConnection";
  items: Array<{
    __typename: "Player";
    id: string;
    roomId: string;
    playerId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type CardByRoomQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    roomId: string;
    cardValue: string;
    x: number;
    y: number;
    z: number;
    faceUp: boolean;
    lastOwner: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type UniqueCardQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    roomId: string;
    cardValue: string;
    x: number;
    y: number;
    z: number;
    faceUp: boolean;
    lastOwner: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type PlayerbyRoomQuery = {
  __typename: "ModelPlayerConnection";
  items: Array<{
    __typename: "Player";
    id: string;
    roomId: string;
    playerId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  id: string;
  roomId: string;
  cardValue: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  lastOwner: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  id: string;
  roomId: string;
  cardValue: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  lastOwner: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  id: string;
  roomId: string;
  cardValue: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  lastOwner: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  roomId: string;
  players: {
    __typename: "ModelPlayerConnection";
    items: Array<{
      __typename: "Player";
      id: string;
      roomId: string;
      playerId: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      roomId: string;
      cardValue: string;
      x: number;
      y: number;
      z: number;
      faceUp: boolean;
      lastOwner: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  roomId: string;
  players: {
    __typename: "ModelPlayerConnection";
    items: Array<{
      __typename: "Player";
      id: string;
      roomId: string;
      playerId: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      roomId: string;
      cardValue: string;
      x: number;
      y: number;
      z: number;
      faceUp: boolean;
      lastOwner: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  roomId: string;
  players: {
    __typename: "ModelPlayerConnection";
    items: Array<{
      __typename: "Player";
      id: string;
      roomId: string;
      playerId: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    items: Array<{
      __typename: "Card";
      id: string;
      roomId: string;
      cardValue: string;
      x: number;
      y: number;
      z: number;
      faceUp: boolean;
      lastOwner: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePlayerSubscription = {
  __typename: "Player";
  id: string;
  roomId: string;
  playerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePlayerSubscription = {
  __typename: "Player";
  id: string;
  roomId: string;
  playerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePlayerSubscription = {
  __typename: "Player";
  id: string;
  roomId: string;
  playerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCard(
    input: CreateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<CreateCardMutation> {
    const statement = `mutation CreateCard($input: CreateCardInput!, $condition: ModelCardConditionInput) {
        createCard(input: $input, condition: $condition) {
          __typename
          id
          roomId
          cardValue
          x
          y
          z
          faceUp
          lastOwner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardMutation>response.data.createCard;
  }
  async UpdateCard(
    input: UpdateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<UpdateCardMutation> {
    const statement = `mutation UpdateCard($input: UpdateCardInput!, $condition: ModelCardConditionInput) {
        updateCard(input: $input, condition: $condition) {
          __typename
          id
          roomId
          cardValue
          x
          y
          z
          faceUp
          lastOwner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardMutation>response.data.updateCard;
  }
  async DeleteCard(
    input: DeleteCardInput,
    condition?: ModelCardConditionInput
  ): Promise<DeleteCardMutation> {
    const statement = `mutation DeleteCard($input: DeleteCardInput!, $condition: ModelCardConditionInput) {
        deleteCard(input: $input, condition: $condition) {
          __typename
          id
          roomId
          cardValue
          x
          y
          z
          faceUp
          lastOwner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardMutation>response.data.deleteCard;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          roomId
          players {
            __typename
            items {
              __typename
              id
              roomId
              playerId
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          cards {
            __typename
            items {
              __typename
              id
              roomId
              cardValue
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          roomId
          players {
            __typename
            items {
              __typename
              id
              roomId
              playerId
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          cards {
            __typename
            items {
              __typename
              id
              roomId
              cardValue
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          roomId
          players {
            __typename
            items {
              __typename
              id
              roomId
              playerId
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          cards {
            __typename
            items {
              __typename
              id
              roomId
              cardValue
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreatePlayer(
    input: CreatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<CreatePlayerMutation> {
    const statement = `mutation CreatePlayer($input: CreatePlayerInput!, $condition: ModelPlayerConditionInput) {
        createPlayer(input: $input, condition: $condition) {
          __typename
          id
          roomId
          playerId
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlayerMutation>response.data.createPlayer;
  }
  async UpdatePlayer(
    input: UpdatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<UpdatePlayerMutation> {
    const statement = `mutation UpdatePlayer($input: UpdatePlayerInput!, $condition: ModelPlayerConditionInput) {
        updatePlayer(input: $input, condition: $condition) {
          __typename
          id
          roomId
          playerId
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlayerMutation>response.data.updatePlayer;
  }
  async DeletePlayer(
    input: DeletePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<DeletePlayerMutation> {
    const statement = `mutation DeletePlayer($input: DeletePlayerInput!, $condition: ModelPlayerConditionInput) {
        deletePlayer(input: $input, condition: $condition) {
          __typename
          id
          roomId
          playerId
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlayerMutation>response.data.deletePlayer;
  }
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          __typename
          id
          roomId
          cardValue
          x
          y
          z
          faceUp
          lastOwner
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardQuery>response.data.getCard;
  }
  async ListCards(
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomId
            cardValue
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardsQuery>response.data.listCards;
  }
  async GetRoom(roomId: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($roomId: ID!) {
        getRoom(roomId: $roomId) {
          __typename
          roomId
          players {
            __typename
            items {
              __typename
              id
              roomId
              playerId
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          cards {
            __typename
            items {
              __typename
              id
              roomId
              cardValue
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      roomId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    roomId?: string,
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($roomId: ID, $filter: ModelRoomFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listRooms(roomId: $roomId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            roomId
            players {
              __typename
              nextToken
            }
            cards {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (roomId) {
      gqlAPIServiceArguments.roomId = roomId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetPlayer(id: string): Promise<GetPlayerQuery> {
    const statement = `query GetPlayer($id: ID!) {
        getPlayer(id: $id) {
          __typename
          id
          roomId
          playerId
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlayerQuery>response.data.getPlayer;
  }
  async ListPlayers(
    filter?: ModelPlayerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlayersQuery> {
    const statement = `query ListPlayers($filter: ModelPlayerFilterInput, $limit: Int, $nextToken: String) {
        listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomId
            playerId
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPlayersQuery>response.data.listPlayers;
  }
  async CardByRoom(
    roomId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CardByRoomQuery> {
    const statement = `query CardByRoom($roomId: ID, $sortDirection: ModelSortDirection, $filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        cardByRoom(roomId: $roomId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomId
            cardValue
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (roomId) {
      gqlAPIServiceArguments.roomId = roomId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CardByRoomQuery>response.data.cardByRoom;
  }
  async UniqueCard(
    roomId?: string,
    cardValue?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UniqueCardQuery> {
    const statement = `query UniqueCard($roomId: ID, $cardValue: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        uniqueCard(roomId: $roomId, cardValue: $cardValue, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomId
            cardValue
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (roomId) {
      gqlAPIServiceArguments.roomId = roomId;
    }
    if (cardValue) {
      gqlAPIServiceArguments.cardValue = cardValue;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UniqueCardQuery>response.data.uniqueCard;
  }
  async PlayerbyRoom(
    roomId?: string,
    playerId?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPlayerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PlayerbyRoomQuery> {
    const statement = `query PlayerbyRoom($roomId: ID, $playerId: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPlayerFilterInput, $limit: Int, $nextToken: String) {
        playerbyRoom(roomId: $roomId, playerId: $playerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomId
            playerId
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (roomId) {
      gqlAPIServiceArguments.roomId = roomId;
    }
    if (playerId) {
      gqlAPIServiceArguments.playerId = playerId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <PlayerbyRoomQuery>response.data.playerbyRoom;
  }
  OnCreateCardListener: Observable<OnCreateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          __typename
          id
          roomId
          cardValue
          x
          y
          z
          faceUp
          lastOwner
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCardSubscription>;

  OnUpdateCardListener: Observable<OnUpdateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCard {
        onUpdateCard {
          __typename
          id
          roomId
          cardValue
          x
          y
          z
          faceUp
          lastOwner
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCardSubscription>;

  OnDeleteCardListener: Observable<OnDeleteCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCard {
        onDeleteCard {
          __typename
          id
          roomId
          cardValue
          x
          y
          z
          faceUp
          lastOwner
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCardSubscription>;

  OnCreateRoomListener: Observable<OnCreateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          roomId
          players {
            __typename
            items {
              __typename
              id
              roomId
              playerId
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          cards {
            __typename
            items {
              __typename
              id
              roomId
              cardValue
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateRoomSubscription>;

  OnUpdateRoomListener: Observable<OnUpdateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          roomId
          players {
            __typename
            items {
              __typename
              id
              roomId
              playerId
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          cards {
            __typename
            items {
              __typename
              id
              roomId
              cardValue
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateRoomSubscription>;

  OnDeleteRoomListener: Observable<OnDeleteRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          roomId
          players {
            __typename
            items {
              __typename
              id
              roomId
              playerId
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          cards {
            __typename
            items {
              __typename
              id
              roomId
              cardValue
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
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteRoomSubscription>;

  OnCreatePlayerListener: Observable<OnCreatePlayerSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlayer {
        onCreatePlayer {
          __typename
          id
          roomId
          playerId
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreatePlayerSubscription>;

  OnUpdatePlayerListener: Observable<OnUpdatePlayerSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlayer {
        onUpdatePlayer {
          __typename
          id
          roomId
          playerId
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdatePlayerSubscription>;

  OnDeletePlayerListener: Observable<OnDeletePlayerSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlayer {
        onDeletePlayer {
          __typename
          id
          roomId
          playerId
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePlayerSubscription>;
}
