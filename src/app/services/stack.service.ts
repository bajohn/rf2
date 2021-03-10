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
    const updateResps = await Promise.all([
      API.graphql(graphqlOperation(createCardStack, createStackParams)) as Promise<{ data: CreateCardStackMutation }>,
      this.cardService.updateOwners(cards, moveableId)
    ]);


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
          ownerId: stack.moveableId,
          id: cv.id
        }
      };

      lv.push(API.graphql(graphqlOperation(updateCard, updateCardParams)) as Promise<any>);
      return lv;
    }, deletePromises);

    const moveableResp = await Promise.all(allPromises);

  }


  public async updateCards(stackId, cardIds) {

    const moveableParams: UpdateCardStackMutationVariables = {
      input: {
        id: stackId,
        cardIds: cardIds
      }
    };
    const resp = await API.graphql(graphqlOperation(updateCardStack, moveableParams)) as { data: UpdateCardStackMutation };;
  }
}
