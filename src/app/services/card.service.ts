import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { updateCard } from 'src/graphql/mutations';
import { UpdateCardMutation, UpdateCardMutationVariables } from '../API.service';
import { card } from '../types';
import { RoomService } from './room.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private roomService: RoomService
  ) { }

  // set all cards to have ownerId of newOwner
  public async updateOwners(cards: card[], newOwner: string) {
    return cards.map(el => {
      const cardParams: UpdateCardMutationVariables = {
        input: {
          ownerId: newOwner,
          id: el.id
        }
      }
      return API.graphql(graphqlOperation(updateCard, cardParams)) as Promise<{ data: UpdateCardMutation }>;
    });
  }
}
