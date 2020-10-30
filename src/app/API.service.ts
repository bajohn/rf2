/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateCardInput = {
  cardValue: string;
  gameId: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
};

export type ModelCardConditionInput = {
  x?: ModelIntInput | null;
  y?: ModelIntInput | null;
  z?: ModelIntInput | null;
  faceUp?: ModelBooleanInput | null;
  and?: Array<ModelCardConditionInput | null> | null;
  or?: Array<ModelCardConditionInput | null> | null;
  not?: ModelCardConditionInput | null;
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

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateCardInput = {
  cardValue: string;
  gameId: string;
  x?: number | null;
  y?: number | null;
  z?: number | null;
  faceUp?: boolean | null;
};

export type DeleteCardInput = {
  gameId: string;
  cardValue: string;
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

export type ModelCardFilterInput = {
  cardValue?: ModelIDInput | null;
  gameId?: ModelIDInput | null;
  x?: ModelIntInput | null;
  y?: ModelIntInput | null;
  z?: ModelIntInput | null;
  faceUp?: ModelBooleanInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
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

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateCardMutation = {
  __typename: "Card";
  cardValue: string;
  gameId: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCardMutation = {
  __typename: "Card";
  cardValue: string;
  gameId: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCardMutation = {
  __typename: "Card";
  cardValue: string;
  gameId: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  createdAt: string;
  updatedAt: string;
};

export type GetCardQuery = {
  __typename: "Card";
  cardValue: string;
  gameId: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    cardValue: string;
    gameId: string;
    x: number;
    y: number;
    z: number;
    faceUp: boolean;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  cardValue: string;
  gameId: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  cardValue: string;
  gameId: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  cardValue: string;
  gameId: string;
  x: number;
  y: number;
  z: number;
  faceUp: boolean;
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
          cardValue
          gameId
          x
          y
          z
          faceUp
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
          cardValue
          gameId
          x
          y
          z
          faceUp
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
          cardValue
          gameId
          x
          y
          z
          faceUp
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
  async GetCard(gameId: string, cardValue: string): Promise<GetCardQuery> {
    const statement = `query GetCard($gameId: ID!, $cardValue: ID!) {
        getCard(gameId: $gameId, cardValue: $cardValue) {
          __typename
          cardValue
          gameId
          x
          y
          z
          faceUp
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      gameId,
      cardValue
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardQuery>response.data.getCard;
  }
  async ListCards(
    gameId?: string,
    cardValue?: ModelIDKeyConditionInput,
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($gameId: ID, $cardValue: ModelIDKeyConditionInput, $filter: ModelCardFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCards(gameId: $gameId, cardValue: $cardValue, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            cardValue
            gameId
            x
            y
            z
            faceUp
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (gameId) {
      gqlAPIServiceArguments.gameId = gameId;
    }
    if (cardValue) {
      gqlAPIServiceArguments.cardValue = cardValue;
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
  OnCreateCardListener: Observable<OnCreateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          __typename
          cardValue
          gameId
          x
          y
          z
          faceUp
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
          cardValue
          gameId
          x
          y
          z
          faceUp
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
          cardValue
          gameId
          x
          y
          z
          faceUp
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCardSubscription>;
}
