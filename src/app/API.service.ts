/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateRoomInput = {
  id?: string | null;
  gameType: string;
};

export type ModelRoomConditionInput = {
  gameType?: ModelStringInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
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

export type UpdateRoomInput = {
  id: string;
  gameType?: string | null;
};

export type DeleteRoomInput = {
  id: string;
};

export type CreateMoveableInput = {
  id?: string | null;
  draggable: boolean;
  x: number;
  y: number;
  z: number;
  lastOwner: string;
  inMotion: boolean;
};

export type ModelMoveableConditionInput = {
  draggable?: ModelBooleanInput | null;
  x?: ModelIntInput | null;
  y?: ModelIntInput | null;
  z?: ModelIntInput | null;
  lastOwner?: ModelStringInput | null;
  inMotion?: ModelBooleanInput | null;
  and?: Array<ModelMoveableConditionInput | null> | null;
  or?: Array<ModelMoveableConditionInput | null> | null;
  not?: ModelMoveableConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
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

export type UpdateMoveableInput = {
  id: string;
  draggable?: boolean | null;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  lastOwner?: string | null;
  inMotion?: boolean | null;
};

export type DeleteMoveableInput = {
  id: string;
};

export type CreateCardInput = {
  id?: string | null;
  roomId: string;
  ownerId: string;
  faceUp: boolean;
  cardValue: string;
  cardMoveableId?: string | null;
};

export type ModelCardConditionInput = {
  roomId?: ModelIDInput | null;
  ownerId?: ModelIDInput | null;
  faceUp?: ModelBooleanInput | null;
  cardValue?: ModelStringInput | null;
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

export type UpdateCardInput = {
  id: string;
  roomId?: string | null;
  ownerId?: string | null;
  faceUp?: boolean | null;
  cardValue?: string | null;
  cardMoveableId?: string | null;
};

export type DeleteCardInput = {
  id: string;
};

export type CreatePlayerInput = {
  id?: string | null;
  roomId: string;
  name: string;
  playerMoveableId?: string | null;
};

export type ModelPlayerConditionInput = {
  roomId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPlayerConditionInput | null> | null;
  or?: Array<ModelPlayerConditionInput | null> | null;
  not?: ModelPlayerConditionInput | null;
};

export type UpdatePlayerInput = {
  id: string;
  roomId?: string | null;
  name?: string | null;
  playerMoveableId?: string | null;
};

export type DeletePlayerInput = {
  id: string;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  gameType?: ModelStringInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelMoveableFilterInput = {
  id?: ModelIDInput | null;
  draggable?: ModelBooleanInput | null;
  x?: ModelIntInput | null;
  y?: ModelIntInput | null;
  z?: ModelIntInput | null;
  lastOwner?: ModelStringInput | null;
  inMotion?: ModelBooleanInput | null;
  and?: Array<ModelMoveableFilterInput | null> | null;
  or?: Array<ModelMoveableFilterInput | null> | null;
  not?: ModelMoveableFilterInput | null;
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null;
  roomId?: ModelIDInput | null;
  ownerId?: ModelIDInput | null;
  faceUp?: ModelBooleanInput | null;
  cardValue?: ModelStringInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null;
  roomId?: ModelIDInput | null;
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

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  gameType: string;
  players: {
    __typename: "ModelPlayerConnection";
    nextToken: string | null;
  } | null;
  card: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  gameType: string;
  players: {
    __typename: "ModelPlayerConnection";
    nextToken: string | null;
  } | null;
  card: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  gameType: string;
  players: {
    __typename: "ModelPlayerConnection";
    nextToken: string | null;
  } | null;
  card: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMoveableMutation = {
  __typename: "Moveable";
  id: string;
  draggable: boolean;
  x: number;
  y: number;
  z: number;
  lastOwner: string;
  inMotion: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMoveableMutation = {
  __typename: "Moveable";
  id: string;
  draggable: boolean;
  x: number;
  y: number;
  z: number;
  lastOwner: string;
  inMotion: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMoveableMutation = {
  __typename: "Moveable";
  id: string;
  draggable: boolean;
  x: number;
  y: number;
  z: number;
  lastOwner: string;
  inMotion: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateCardMutation = {
  __typename: "Card";
  id: string;
  roomId: string;
  ownerId: string;
  faceUp: boolean;
  cardValue: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardMutation = {
  __typename: "Card";
  id: string;
  roomId: string;
  ownerId: string;
  faceUp: boolean;
  cardValue: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardMutation = {
  __typename: "Card";
  id: string;
  roomId: string;
  ownerId: string;
  faceUp: boolean;
  cardValue: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePlayerMutation = {
  __typename: "Player";
  id: string;
  roomId: string;
  name: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePlayerMutation = {
  __typename: "Player";
  id: string;
  roomId: string;
  name: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePlayerMutation = {
  __typename: "Player";
  id: string;
  roomId: string;
  name: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  gameType: string;
  players: {
    __typename: "ModelPlayerConnection";
    nextToken: string | null;
  } | null;
  card: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    gameType: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetMoveableQuery = {
  __typename: "Moveable";
  id: string;
  draggable: boolean;
  x: number;
  y: number;
  z: number;
  lastOwner: string;
  inMotion: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ListMoveablesQuery = {
  __typename: "ModelMoveableConnection";
  items: Array<{
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardQuery = {
  __typename: "Card";
  id: string;
  roomId: string;
  ownerId: string;
  faceUp: boolean;
  cardValue: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    roomId: string;
    ownerId: string;
    faceUp: boolean;
    cardValue: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPlayerQuery = {
  __typename: "Player";
  id: string;
  roomId: string;
  name: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPlayersQuery = {
  __typename: "ModelPlayerConnection";
  items: Array<{
    __typename: "Player";
    id: string;
    roomId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type CardsByRoomQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    roomId: string;
    ownerId: string;
    faceUp: boolean;
    cardValue: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type CardsByOwnerQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    roomId: string;
    ownerId: string;
    faceUp: boolean;
    cardValue: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type PlayersByRoomQuery = {
  __typename: "ModelPlayerConnection";
  items: Array<{
    __typename: "Player";
    id: string;
    roomId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  gameType: string;
  players: {
    __typename: "ModelPlayerConnection";
    nextToken: string | null;
  } | null;
  card: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  gameType: string;
  players: {
    __typename: "ModelPlayerConnection";
    nextToken: string | null;
  } | null;
  card: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  gameType: string;
  players: {
    __typename: "ModelPlayerConnection";
    nextToken: string | null;
  } | null;
  card: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMoveableSubscription = {
  __typename: "Moveable";
  id: string;
  draggable: boolean;
  x: number;
  y: number;
  z: number;
  lastOwner: string;
  inMotion: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMoveableSubscription = {
  __typename: "Moveable";
  id: string;
  draggable: boolean;
  x: number;
  y: number;
  z: number;
  lastOwner: string;
  inMotion: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMoveableSubscription = {
  __typename: "Moveable";
  id: string;
  draggable: boolean;
  x: number;
  y: number;
  z: number;
  lastOwner: string;
  inMotion: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  id: string;
  roomId: string;
  ownerId: string;
  faceUp: boolean;
  cardValue: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  id: string;
  roomId: string;
  ownerId: string;
  faceUp: boolean;
  cardValue: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  id: string;
  roomId: string;
  ownerId: string;
  faceUp: boolean;
  cardValue: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePlayerSubscription = {
  __typename: "Player";
  id: string;
  roomId: string;
  name: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePlayerSubscription = {
  __typename: "Player";
  id: string;
  roomId: string;
  name: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePlayerSubscription = {
  __typename: "Player";
  id: string;
  roomId: string;
  name: string;
  moveable: {
    __typename: "Moveable";
    id: string;
    draggable: boolean;
    x: number;
    y: number;
    z: number;
    lastOwner: string;
    inMotion: boolean;
    createdAt: string;
    updatedAt: string;
  } | null;
  cards: {
    __typename: "ModelCardConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          gameType
          players {
            __typename
            nextToken
          }
          card {
            __typename
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
          id
          gameType
          players {
            __typename
            nextToken
          }
          card {
            __typename
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
          id
          gameType
          players {
            __typename
            nextToken
          }
          card {
            __typename
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
  async CreateMoveable(
    input: CreateMoveableInput,
    condition?: ModelMoveableConditionInput
  ): Promise<CreateMoveableMutation> {
    const statement = `mutation CreateMoveable($input: CreateMoveableInput!, $condition: ModelMoveableConditionInput) {
        createMoveable(input: $input, condition: $condition) {
          __typename
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
    return <CreateMoveableMutation>response.data.createMoveable;
  }
  async UpdateMoveable(
    input: UpdateMoveableInput,
    condition?: ModelMoveableConditionInput
  ): Promise<UpdateMoveableMutation> {
    const statement = `mutation UpdateMoveable($input: UpdateMoveableInput!, $condition: ModelMoveableConditionInput) {
        updateMoveable(input: $input, condition: $condition) {
          __typename
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
    return <UpdateMoveableMutation>response.data.updateMoveable;
  }
  async DeleteMoveable(
    input: DeleteMoveableInput,
    condition?: ModelMoveableConditionInput
  ): Promise<DeleteMoveableMutation> {
    const statement = `mutation DeleteMoveable($input: DeleteMoveableInput!, $condition: ModelMoveableConditionInput) {
        deleteMoveable(input: $input, condition: $condition) {
          __typename
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
    return <DeleteMoveableMutation>response.data.deleteMoveable;
  }
  async CreateCard(
    input: CreateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<CreateCardMutation> {
    const statement = `mutation CreateCard($input: CreateCardInput!, $condition: ModelCardConditionInput) {
        createCard(input: $input, condition: $condition) {
          __typename
          id
          roomId
          ownerId
          faceUp
          cardValue
          moveable {
            __typename
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
          ownerId
          faceUp
          cardValue
          moveable {
            __typename
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
          ownerId
          faceUp
          cardValue
          moveable {
            __typename
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
  async CreatePlayer(
    input: CreatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<CreatePlayerMutation> {
    const statement = `mutation CreatePlayer($input: CreatePlayerInput!, $condition: ModelPlayerConditionInput) {
        createPlayer(input: $input, condition: $condition) {
          __typename
          id
          roomId
          name
          moveable {
            __typename
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
            __typename
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
          name
          moveable {
            __typename
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
            __typename
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
          name
          moveable {
            __typename
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
            __typename
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
    return <DeletePlayerMutation>response.data.deletePlayer;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          gameType
          players {
            __typename
            nextToken
          }
          card {
            __typename
            nextToken
          }
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
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    id?: string,
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($id: ID, $filter: ModelRoomFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listRooms(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            gameType
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
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
  async GetMoveable(id: string): Promise<GetMoveableQuery> {
    const statement = `query GetMoveable($id: ID!) {
        getMoveable(id: $id) {
          __typename
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMoveableQuery>response.data.getMoveable;
  }
  async ListMoveables(
    id?: string,
    filter?: ModelMoveableFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListMoveablesQuery> {
    const statement = `query ListMoveables($id: ID, $filter: ModelMoveableFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listMoveables(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
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
    return <ListMoveablesQuery>response.data.listMoveables;
  }
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          __typename
          id
          roomId
          ownerId
          faceUp
          cardValue
          moveable {
            __typename
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
    id?: string,
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($id: ID, $filter: ModelCardFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCards(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
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
    return <ListCardsQuery>response.data.listCards;
  }
  async GetPlayer(id: string): Promise<GetPlayerQuery> {
    const statement = `query GetPlayer($id: ID!) {
        getPlayer(id: $id) {
          __typename
          id
          roomId
          name
          moveable {
            __typename
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
            __typename
            nextToken
          }
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
    id?: string,
    filter?: ModelPlayerFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListPlayersQuery> {
    const statement = `query ListPlayers($id: ID, $filter: ModelPlayerFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listPlayers(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            roomId
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
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
    return <ListPlayersQuery>response.data.listPlayers;
  }
  async CardsByRoom(
    roomId?: string,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CardsByRoomQuery> {
    const statement = `query CardsByRoom($roomId: ID, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        cardsByRoom(roomId: $roomId, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (roomId) {
      gqlAPIServiceArguments.roomId = roomId;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
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
    return <CardsByRoomQuery>response.data.cardsByRoom;
  }
  async CardsByOwner(
    ownerId?: string,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<CardsByOwnerQuery> {
    const statement = `query CardsByOwner($ownerId: ID, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        cardsByOwner(ownerId: $ownerId, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ownerId) {
      gqlAPIServiceArguments.ownerId = ownerId;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
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
    return <CardsByOwnerQuery>response.data.cardsByOwner;
  }
  async PlayersByRoom(
    roomId?: string,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPlayerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PlayersByRoomQuery> {
    const statement = `query PlayersByRoom($roomId: ID, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPlayerFilterInput, $limit: Int, $nextToken: String) {
        playersByRoom(roomId: $roomId, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomId
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
    if (id) {
      gqlAPIServiceArguments.id = id;
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
    return <PlayersByRoomQuery>response.data.playersByRoom;
  }
  OnCreateRoomListener: Observable<OnCreateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          id
          gameType
          players {
            __typename
            nextToken
          }
          card {
            __typename
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
          id
          gameType
          players {
            __typename
            nextToken
          }
          card {
            __typename
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
          id
          gameType
          players {
            __typename
            nextToken
          }
          card {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteRoomSubscription>;

  OnCreateMoveableListener: Observable<
    OnCreateMoveableSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMoveable {
        onCreateMoveable {
          __typename
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
      }`
    )
  ) as Observable<OnCreateMoveableSubscription>;

  OnUpdateMoveableListener: Observable<
    OnUpdateMoveableSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMoveable {
        onUpdateMoveable {
          __typename
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
      }`
    )
  ) as Observable<OnUpdateMoveableSubscription>;

  OnDeleteMoveableListener: Observable<
    OnDeleteMoveableSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMoveable {
        onDeleteMoveable {
          __typename
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
      }`
    )
  ) as Observable<OnDeleteMoveableSubscription>;

  OnCreateCardListener: Observable<OnCreateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          __typename
          id
          roomId
          ownerId
          faceUp
          cardValue
          moveable {
            __typename
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
          ownerId
          faceUp
          cardValue
          moveable {
            __typename
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
          ownerId
          faceUp
          cardValue
          moveable {
            __typename
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
      }`
    )
  ) as Observable<OnDeleteCardSubscription>;

  OnCreatePlayerListener: Observable<OnCreatePlayerSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlayer {
        onCreatePlayer {
          __typename
          id
          roomId
          name
          moveable {
            __typename
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
            __typename
            nextToken
          }
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
          name
          moveable {
            __typename
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
            __typename
            nextToken
          }
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
          name
          moveable {
            __typename
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
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePlayerSubscription>;
}
