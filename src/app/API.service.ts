/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoomInput = {
  uuid: string,
  gameType: string,
};

export type ModelRoomConditionInput = {
  gameType?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateRoomInput = {
  uuid: string,
  gameType?: string | null,
};

export type DeleteRoomInput = {
  uuid: string,
};

export type CreateMoveableInput = {
  uuid: string,
  roomId: string,
  draggable: boolean,
  x: number,
  y: number,
  z: number,
  lastOwner: string,
  inMotion: boolean,
  type: string,
};

export type ModelMoveableConditionInput = {
  draggable?: ModelBooleanInput | null,
  x?: ModelIntInput | null,
  y?: ModelIntInput | null,
  z?: ModelIntInput | null,
  lastOwner?: ModelStringInput | null,
  inMotion?: ModelBooleanInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelMoveableConditionInput | null > | null,
  or?: Array< ModelMoveableConditionInput | null > | null,
  not?: ModelMoveableConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMoveableInput = {
  uuid: string,
  roomId: string,
  draggable?: boolean | null,
  x?: number | null,
  y?: number | null,
  z?: number | null,
  lastOwner?: string | null,
  inMotion?: boolean | null,
  type?: string | null,
};

export type DeleteMoveableInput = {
  uuid: string,
  roomId: string,
};

export type CreateCardInput = {
  id?: string | null,
  roomId: string,
  ownerId: string,
  faceUp: boolean,
  cardValue: string,
};

export type ModelCardConditionInput = {
  roomId?: ModelIDInput | null,
  ownerId?: ModelIDInput | null,
  faceUp?: ModelBooleanInput | null,
  cardValue?: ModelStringInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCardInput = {
  id: string,
  roomId?: string | null,
  ownerId?: string | null,
  faceUp?: boolean | null,
  cardValue?: string | null,
};

export type DeleteCardInput = {
  id: string,
};

export type CreatePlayerInput = {
  id?: string | null,
  roomId: string,
  name: string,
};

export type ModelPlayerConditionInput = {
  roomId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  roomId?: string | null,
  name?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type ModelRoomFilterInput = {
  uuid?: ModelIDInput | null,
  gameType?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMoveableFilterInput = {
  uuid?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  draggable?: ModelBooleanInput | null,
  x?: ModelIntInput | null,
  y?: ModelIntInput | null,
  z?: ModelIntInput | null,
  lastOwner?: ModelStringInput | null,
  inMotion?: ModelBooleanInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelMoveableFilterInput | null > | null,
  or?: Array< ModelMoveableFilterInput | null > | null,
  not?: ModelMoveableFilterInput | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  ownerId?: ModelIDInput | null,
  faceUp?: ModelBooleanInput | null,
  cardValue?: ModelStringInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  roomId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    uuid: string,
    gameType: string,
    moveables:  {
      __typename: "ModelMoveableConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom:  {
    __typename: "Room",
    uuid: string,
    gameType: string,
    moveables:  {
      __typename: "ModelMoveableConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom:  {
    __typename: "Room",
    uuid: string,
    gameType: string,
    moveables:  {
      __typename: "ModelMoveableConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMoveableMutationVariables = {
  input: CreateMoveableInput,
  condition?: ModelMoveableConditionInput | null,
};

export type CreateMoveableMutation = {
  createMoveable:  {
    __typename: "Moveable",
    uuid: string,
    roomId: string,
    draggable: boolean,
    x: number,
    y: number,
    z: number,
    lastOwner: string,
    inMotion: boolean,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMoveableMutationVariables = {
  input: UpdateMoveableInput,
  condition?: ModelMoveableConditionInput | null,
};

export type UpdateMoveableMutation = {
  updateMoveable:  {
    __typename: "Moveable",
    uuid: string,
    roomId: string,
    draggable: boolean,
    x: number,
    y: number,
    z: number,
    lastOwner: string,
    inMotion: boolean,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMoveableMutationVariables = {
  input: DeleteMoveableInput,
  condition?: ModelMoveableConditionInput | null,
};

export type DeleteMoveableMutation = {
  deleteMoveable:  {
    __typename: "Moveable",
    uuid: string,
    roomId: string,
    draggable: boolean,
    x: number,
    y: number,
    z: number,
    lastOwner: string,
    inMotion: boolean,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard:  {
    __typename: "Card",
    id: string,
    roomId: string,
    ownerId: string,
    faceUp: boolean,
    cardValue: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard:  {
    __typename: "Card",
    id: string,
    roomId: string,
    ownerId: string,
    faceUp: boolean,
    cardValue: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard:  {
    __typename: "Card",
    id: string,
    roomId: string,
    ownerId: string,
    faceUp: boolean,
    cardValue: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer:  {
    __typename: "Player",
    id: string,
    roomId: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer:  {
    __typename: "Player",
    id: string,
    roomId: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer:  {
    __typename: "Player",
    id: string,
    roomId: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRoomQueryVariables = {
  uuid: string,
};

export type GetRoomQuery = {
  getRoom:  {
    __typename: "Room",
    uuid: string,
    gameType: string,
    moveables:  {
      __typename: "ModelMoveableConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  uuid?: string | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRoomsQuery = {
  listRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      uuid: string,
      gameType: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMoveableQueryVariables = {
  uuid: string,
  roomId: string,
};

export type GetMoveableQuery = {
  getMoveable:  {
    __typename: "Moveable",
    uuid: string,
    roomId: string,
    draggable: boolean,
    x: number,
    y: number,
    z: number,
    lastOwner: string,
    inMotion: boolean,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMoveablesQueryVariables = {
  uuid?: string | null,
  roomId?: ModelIDKeyConditionInput | null,
  filter?: ModelMoveableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMoveablesQuery = {
  listMoveables:  {
    __typename: "ModelMoveableConnection",
    items:  Array< {
      __typename: "Moveable",
      uuid: string,
      roomId: string,
      draggable: boolean,
      x: number,
      y: number,
      z: number,
      lastOwner: string,
      inMotion: boolean,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard:  {
    __typename: "Card",
    id: string,
    roomId: string,
    ownerId: string,
    faceUp: boolean,
    cardValue: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCardsQueryVariables = {
  id?: string | null,
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCardsQuery = {
  listCards:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      roomId: string,
      ownerId: string,
      faceUp: boolean,
      cardValue: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer:  {
    __typename: "Player",
    id: string,
    roomId: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  id?: string | null,
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlayersQuery = {
  listPlayers:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      roomId: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type MoveableByRoomQueryVariables = {
  roomId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMoveableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MoveableByRoomQuery = {
  moveableByRoom:  {
    __typename: "ModelMoveableConnection",
    items:  Array< {
      __typename: "Moveable",
      uuid: string,
      roomId: string,
      draggable: boolean,
      x: number,
      y: number,
      z: number,
      lastOwner: string,
      inMotion: boolean,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    uuid: string,
    gameType: string,
    moveables:  {
      __typename: "ModelMoveableConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    uuid: string,
    gameType: string,
    moveables:  {
      __typename: "ModelMoveableConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    uuid: string,
    gameType: string,
    moveables:  {
      __typename: "ModelMoveableConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMoveableSubscription = {
  onCreateMoveable:  {
    __typename: "Moveable",
    uuid: string,
    roomId: string,
    draggable: boolean,
    x: number,
    y: number,
    z: number,
    lastOwner: string,
    inMotion: boolean,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMoveableSubscription = {
  onUpdateMoveable:  {
    __typename: "Moveable",
    uuid: string,
    roomId: string,
    draggable: boolean,
    x: number,
    y: number,
    z: number,
    lastOwner: string,
    inMotion: boolean,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMoveableSubscription = {
  onDeleteMoveable:  {
    __typename: "Moveable",
    uuid: string,
    roomId: string,
    draggable: boolean,
    x: number,
    y: number,
    z: number,
    lastOwner: string,
    inMotion: boolean,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCardSubscription = {
  onCreateCard:  {
    __typename: "Card",
    id: string,
    roomId: string,
    ownerId: string,
    faceUp: boolean,
    cardValue: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard:  {
    __typename: "Card",
    id: string,
    roomId: string,
    ownerId: string,
    faceUp: boolean,
    cardValue: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard:  {
    __typename: "Card",
    id: string,
    roomId: string,
    ownerId: string,
    faceUp: boolean,
    cardValue: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer:  {
    __typename: "Player",
    id: string,
    roomId: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer:  {
    __typename: "Player",
    id: string,
    roomId: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer:  {
    __typename: "Player",
    id: string,
    roomId: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
