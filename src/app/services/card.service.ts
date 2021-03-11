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
  public updateOwnerPromises(cards: card[], newOwner: string): Promise<any>[] {
    const promises = cards.map(el => {
      const cardParams: UpdateCardMutationVariables = {
        input: {
          ownerId: newOwner,
          id: el.id
        }
      }
      el.ownerId = newOwner;
      return API.graphql(graphqlOperation(updateCard, cardParams)) as Promise<{ data: UpdateCardMutation }>;
    });
    return promises;
  }

  public async updateOwners(cards, newOwner) {
    await this.updateOwnerPromises(cards, newOwner);
  }
}
