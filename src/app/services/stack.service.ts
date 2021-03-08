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

@Injectable({
  providedIn: 'root'
})
export class StackService {

  constructor(
    private roomService: RoomService
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


    // TODO: update card owner

    const targetCardParams: UpdateCardMutationVariables = {
      input: {
        ownerId: moveableId,
        id: targetCard.id
      }
    }

    const droppingCardParams: UpdateCardMutationVariables = {
      input: {
        ownerId: moveableId,
        id: droppingCard.id
      }
    }

    // TODO: test this! completely untested.
    const updateResps = await Promise.all([
      API.graphql(graphqlOperation(createCardStack, createStackParams)) as Promise<{ data: CreateCardStackMutation }>,
      API.graphql(graphqlOperation(updateCard, targetCardParams)) as Promise<{ data: UpdateCardMutation }>,
      API.graphql(graphqlOperation(updateCard, droppingCardParams)) as Promise<{ data: UpdateCardMutation }>
    ])


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

  public async delete(stackId: string, moveableId: string) {

    const deleteMoveableParams: DeleteMoveableMutationVariables = {
      input: {
        id: moveableId
      }
    };


    const deleteStackParams: DeleteCardStackMutationVariables = {
      input: {
        id: stackId
      }
    };
    const moveableResp = await Promise.all(
      [API.graphql(graphqlOperation(deleteMoveable, deleteMoveableParams)) as Promise<{ data: DeleteMoveableMutation }>,
      API.graphql(graphqlOperation(deleteCardStack, deleteStackParams)) as Promise<{ data: DeleteCardStackMutation }>]
    );
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
