import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import {

  CreateMoveableMutationVariables,
  CreateCardStackMutationVariables,
  CreateCardStackMutation,
  CreateMoveableMutation,
  DeleteMoveableMutationVariables,
  DeleteCardStackMutationVariables,
  DeleteMoveableMutation,
  DeleteCardStackMutation,
  UpdateCardStackMutationVariables,
  UpdateCardStackMutation,
  UpdateCardMutation,
  UpdateCardMutationVariables,

} from '../API.service';
import {
  createCardStack,
  createMoveable,
  deleteCardStack,
  deleteMoveable,
  updateCard,
  updateCardStack
} from 'src/graphql/mutations';
import { RoomService } from './room.service';
import { card, cardStack, moveable } from '../types';
import { CardService } from './card.service';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  constructor(
    private roomService: RoomService,
    private cardService: CardService
  ) { }

  // TODO: this class is huge, move to a helper
  // class or make private.
  public async create(targetCard: card, droppingCard: card): Promise<cardStack> {
    const cards = [targetCard, droppingCard];
    const createMoveableParams: CreateMoveableMutationVariables = {
      input: {
        x: targetCard.x,
        y: targetCard.y,
        z: targetCard.z,
        inMotion: false,
        draggable: true,
        lastOwner: '',
      }
    }
    const moveableResp = await API.graphql(graphqlOperation(createMoveable, createMoveableParams)) as { data: CreateMoveableMutation };
    const moveableId = moveableResp.data.createMoveable.id;
    const cardIds = cards.map(card => card.moveableId);
    const createStackParams: CreateCardStackMutationVariables = {
      input: {
        roomId: this.roomService.id,
        cardStackMoveableId: moveableId,
        cardIds: cardIds
      }
    }


    // TODO: test this! completely untested.
    const promises = [
      API.graphql(graphqlOperation(createCardStack, createStackParams)) as Promise<{ data: CreateCardStackMutation }>,
    ].concat(this.cardService.updateOwnerPromises(cards, moveableId));
    const updateResps = await Promise.all(promises);
    const createStackResp = updateResps[0];

    const stack: cardStack = {
      id: createStackResp.data.createCardStack.id,
      roomId: this.roomService.id,
      moveableId: moveableId,
      cards: cards,
      x: targetCard.x,
      y: targetCard.y,
      z: targetCard.z,
      inMotion: false,
      draggable: true,
      lastOwner: '',
      highlight: false,
      lastUpdated: (new Date()).getTime(),
    };
    return stack;
  }

  public async delete(stack: cardStack) {

    const deleteMoveableParams: DeleteMoveableMutationVariables = {
      input: {
        id: stack.moveableId
      }
    };


    const deleteStackParams: DeleteCardStackMutationVariables = {
      input: {
        id: stack.id
      }
    };
    const deletePromises: Promise<any>[] = [
      API.graphql(graphqlOperation(deleteMoveable, deleteMoveableParams)) as Promise<{ data: DeleteMoveableMutation }>,
      API.graphql(graphqlOperation(deleteCardStack, deleteStackParams)) as Promise<{ data: DeleteCardStackMutation }>
    ];

    const allPromises = stack.cards.reduce((lv, cv) => {

      const updateCardParams: UpdateCardMutationVariables = {
        input: {
          ownerId: 'none',
          id: cv.id
        }
      };

      lv.push(API.graphql(graphqlOperation(updateCard, updateCardParams)) as Promise<any>);
      return lv;
    }, deletePromises);

    return await Promise.all(allPromises);

  }


  public async updateCards(cards: card[], stack: cardStack) {
    const moveableParams: UpdateCardStackMutationVariables = {
      input: {
        id: stack.id,
        cardIds: cards.map(el => el.moveableId)
      }
    };
    const promises = this.cardService.updateOwnerPromises(cards, stack.moveableId).concat(
      [
        API.graphql(graphqlOperation(updateCardStack, moveableParams)) as Promise<{ data: UpdateCardStackMutation }>,
      ]
    )
    return await Promise.all(promises);
  }


  removeCard(stack: cardStack, card: card) {
    const ownerCards = stack.cards;
    const ownerCardIds = ownerCards.map(card => card.id);
    console.log(ownerCardIds.length);

    const idx = ownerCardIds.indexOf(card.id);
    console.log(stack, card);
    this.cardService.updateOwners([card], 'none');
    console.log(idx);
    if (idx > -1) {
      const newOwnerCards = ownerCards.splice(idx, 1);
      stack.cards = newOwnerCards;

      this.updateCards(newOwnerCards, stack);
    }

  }
}
