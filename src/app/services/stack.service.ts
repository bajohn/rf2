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

} from '../API.service';
import { createCardStack, createMoveable, deleteCardStack, deleteMoveable, updateCardStack } from 'src/graphql/mutations';
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
  public async create(moveable: moveable, cards: card[]): Promise<cardStack> {
    const createMoveableParams: CreateMoveableMutationVariables = {
      input: {
        x: moveable.x,
        y: moveable.y,
        z: moveable.z,
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
    const resp = await API.graphql(graphqlOperation(createCardStack, createStackParams)) as { data: CreateCardStackMutation };
    const stack: cardStack = {
      id: resp.data.createCardStack.id,
      roomId: this.roomService.id,
      moveableId: moveableId,
      cards: cards,
      x: moveable.x,
      y: moveable.y,
      z: moveable.z,
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
