import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import {
  cardsByRoomFull,
  stacksByRoomFull
} from 'src/graphql/customqueries';
import { onUpdateMoveable } from 'src/graphql/subscriptions';
import {
  CardsByRoomFullQuery,
  CardsByRoomQueryVariables,
  OnUpdateMoveableSubscription,
  UpdateMoveableMutationVariables,
  GetMoveableQuery,
  StacksByRoomQueryVariables,
  StacksByRoomFullQuery,
  CreateMoveableMutationVariables,
  CreateCardStackMutationVariables,
  CreateCardStackMutation,
  CreateMoveableMutation,
  DeleteMoveableMutationVariables,
  DeleteCardStackMutationVariables,
  DeleteMoveableMutation,
  DeleteCardStackMutation,

} from '../API.service';


import Observable from 'zen-observable-ts';
import { PlayerService } from './player.service';
import { RoomService } from './room.service';
import { createCardStack, createMoveable, deleteCardStack, deleteMoveable, updateMoveable } from 'src/graphql/mutations';
import { card, cardStack, moveable } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MoveableService {

  private cards: card[];
  private stacks: cardStack[];
  private readonly lookup: { [key: string]: card | cardStack } = {}; // moveableId->flattened obj
  private inMotion: (card | cardStack)[] = [];
  private dropTarget: card | cardStack = null;

  public readonly UPDATE_MIN_MS = 100;
  public readonly CARD_H = 105;
  public readonly CARD_W = 75;
  public readonly STACK_H = 105;
  public readonly STACK_W = 100;

  private maxZ = -1;

  constructor(
    private playerService: PlayerService,
    private roomService: RoomService

  ) {
    this.listStacks();
    this.listCards();

  }

  private async listStacks() {
    const listParams: StacksByRoomQueryVariables = {
      roomId: this.roomService.id
    };
    const resp = await API.graphql(graphqlOperation(stacksByRoomFull, listParams)) as { data: StacksByRoomFullQuery };
    const roomStacksResp = resp.data.stacksByRoom.items;

    this.stacks = roomStacksResp.map(el => {

      const cardsInStack = el.cardIds.map(cardId=>{
        return this.lookupMoveable(cardId) as card;
      })
      const moveableResp = this.respToLoc(el);
      const stackObj: cardStack = Object.assign({
        id: el.id,
        highlight: false,
        cards: cardsInStack
      }, moveableResp);
      this.lookup[el.moveable.id] = stackObj;
      return stackObj;
    });
    console.log(this.stacks);
  }

  private async listCards() {
    const listParams: CardsByRoomQueryVariables = {
      roomId: this.roomService.id
    };
    const resp = await API.graphql(graphqlOperation(cardsByRoomFull, listParams)) as { data: CardsByRoomFullQuery };
    const roomCardsResp = resp.data.cardsByRoom.items;

    this.cards = roomCardsResp.map(el => {

      const moveableResp = this.respToLoc(el);
      const cardObj: card = Object.assign({
        id: el.id,
        faceUp: el.faceUp,
        cardValue: el.cardValue,
        highlight: false
      }, moveableResp);
      this.lookup[el.moveable.id] = cardObj;
      this.maxZ = Math.max(this.maxZ, cardObj.z);
      return cardObj;
    });
    const vars = {
      roomId: this.roomService.id,
    };
    // TODO: can this specific type be specified in autogenerated ts?
    // should be OnUpdateCardSubscription insteady of `any`
    const obs = API.graphql(graphqlOperation(onUpdateMoveable, vars)) as Observable<object>;

    obs.subscribe({
      next: (resp: { value: { data: OnUpdateMoveableSubscription } }) => {
        const updated = resp.value.data.onUpdateMoveable;
        const local = this.lookup[updated.id];

        const updateTime = (new Date(updated.updatedAt)).getTime();
        if (!local.inMotion
          && this.playerService.id !== updated.lastOwner
          && updateTime > local.lastUpdated) {
          const copyProps = {
            x: updated.x,
            y: updated.y,
            z: updated.z,
            lastOwner: updated.lastOwner,
            lastUpdateTime: updateTime
          };
          Object.assign(local, copyProps);
        }
      }
    });

  }

  // Stealing GetMoveableQuery as a general moveable type 
  // from the backend
  private respToLoc(el: { moveable: GetMoveableQuery['getMoveable'] }) {
    const resp: moveable = {
      //id: el.id,
      roomId: this.roomService.id,
      moveableId: el.moveable.id,
      x: el.moveable.x,
      y: el.moveable.y,
      z: el.moveable.z,
      inMotion: el.moveable.inMotion,
      lastUpdated: (new Date(el.moveable.updatedAt)).getTime(),
      lastOwner: el.moveable.lastOwner,
      draggable: true,
    }
    return resp;
  }

  private isCard(moveableIn: card | cardStack) {
    return 'cardValue' in moveableIn;
  }

  private isStack(moveableIn: card | cardStack) {
    return 'cards' in moveableIn;
  }

  private publishUpdate(moveable, curTime) {
    moveable.lastUpdated = curTime;
    const moveableParams: UpdateMoveableMutationVariables = {
      input: {
        id: moveable.moveableId,
        x: moveable.x,
        y: moveable.y,
        z: moveable.z,
        lastOwner: this.playerService.id,
        inMotion: moveable.inMotion,
      }
    };
    API.graphql(graphqlOperation(updateMoveable, moveableParams));
  }

  private curTime() {
    return (new Date()).getTime();
  }


  private updateHighlight(mouseX: number, mouseY: number, moveableIn: cardStack | card) {
    // const curHighlight = moveableIn.highlight;
    // if (curHighlight !== nextHighlight) {
    //   moveableIn.highlight = nextHighlight;
    // }
    if (!moveableIn.inMotion) {
      const maybeHighlight = this.inMoveable(mouseX, mouseY, moveableIn);
      if (maybeHighlight) {
        if (this.dropTarget) {

          if (moveableIn.z > this.dropTarget.z) {
            moveableIn.highlight = true;
            this.dropTarget = moveableIn;
          }
        } else {

          moveableIn.highlight = true;
          this.dropTarget = moveableIn;
        }
      } else {
        moveableIn.highlight = false;
        if (moveableIn === this.dropTarget) {
          this.dropTarget = null;
        }
      }
    }
  }

  private inMoveable(mouseX: number, mouseY: number, moveableIn: cardStack | card) {
    const width = this.isCard(moveableIn) ? this.CARD_W : this.STACK_W
    const height = this.isCard(moveableIn) ? this.CARD_H : this.STACK_H
    return moveableIn.x < mouseX &&
      mouseX < moveableIn.x + width &&
      moveableIn.y < mouseY &&
      mouseY < moveableIn.y + height;

  }

  public mouseDown(id: string) {
    const moveableObj = this.lookupMoveable(id);
    moveableObj.inMotion = true;
    moveableObj.highlight = true;
    this.maxZ += 1;
    moveableObj.z = this.maxZ;
    this.inMotion.push(moveableObj);
  }

  public mouseUp() {

    if (this.inMotion.length > 1) {
      console.error('Not ready for this');
    } else if (this.inMotion.length === 1) {
      const inMotion = this.inMotion.pop();
      inMotion.inMotion = false;
      inMotion.highlight = false;
      if (this.dropTarget) {
        inMotion.x = this.dropTarget.x;
        inMotion.y = this.dropTarget.y;
        if (this.isCard(inMotion)) {
          if (this.isCard(this.dropTarget)) {
            this.createStack(inMotion, [this.dropTarget.id, inMotion.id]);
          } else if (this.isStack(this.dropTarget)) {
            console.log('add to stack ', inMotion.id);
          }
        }
        this.dropTarget = null;
      }

      this.publishUpdate(inMotion, this.curTime());
    }

    for (const card of this.cards) {
      card.highlight = false;
    }

    for (const stack of this.stacks) {
      stack.highlight = false;
    }
  }


  public mouseMove(event: MouseEvent) {
    const curTime = this.curTime()
    this.inMotion.forEach(obj => {

      const x = event.x;
      const y = event.y;

      obj.x = Math.round(x - this.CARD_W / 2);
      obj.y = Math.round(y - this.CARD_H / 2);


      for (const card of this.cards) {
        this.updateHighlight(x, y, card);
      }
      for (const stack of this.stacks) {
        this.updateHighlight(x, y, stack);
      }

      if (curTime - obj.lastUpdated > this.UPDATE_MIN_MS) {
        this.publishUpdate(obj, curTime);
      }
    });
  }


  public beingDragged(id: string) {
    const moveableObj = this.lookupMoveable(id);
    return moveableObj.inMotion;
  }

  public getHeight(id) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj)) {
      return this.CARD_H + 'px';
    } else if (this.isStack(moveableObj)) {
      return this.STACK_H + 'px';
    }
  }

  public getWidth(id) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj)) {
      return this.CARD_W + 'px';
    } else if (this.isStack(moveableObj)) {
      return this.STACK_W + 'px';
    }
  }

  public getTransform(id) {
    const moveableObj = this.lookupMoveable(id);
    return `translate3d(${moveableObj.x}px, ${moveableObj.y}px, 0px)`;
  }

  public getZ(id) {
    const moveableObj = this.lookupMoveable(id);
    return moveableObj.z;
  }

  public isHighlighted(id) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj) || this.isStack(moveableObj)) {
      const card = moveableObj as card | cardStack;
      return card.highlight;
    }
  }

  public getCards(): card[] {
    return this.cards;
  }

  public getStacks(): cardStack[] {
    return this.stacks;
  }

  private lookupMoveable(id): card | cardStack {
    return this.lookup[id];
  }


  // TODO: this class is huge, move to a helper
  // class or make private.
  public async createStack(moveable: moveable, cardIds: string[]) {
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


    const createStackParams: CreateCardStackMutationVariables = {
      input: {
        roomId: this.roomService.id,
        cardStackMoveableId: moveableId,
        cardIds: cardIds
      }
    }
    console.log('create stack', createStackParams);
    const resp = await API.graphql(graphqlOperation(createCardStack, createStackParams)) as { data: CreateCardStackMutation };
  }

  public async deleteStack() {
    const stacks = this.getStacks();
    if (stacks.length > 0) {
      const stack = stacks.pop();

      const deleteMoveableParams: DeleteMoveableMutationVariables = {
        input: {
          id: stack.moveableId
        }
      };
      const moveableResp = await API.graphql(graphqlOperation(deleteMoveable, deleteMoveableParams)) as { data: DeleteMoveableMutation };

      const deleteStackParams: DeleteCardStackMutationVariables = {
        input: {
          id: stack.id
        }
      };
      const stackResp = await API.graphql(graphqlOperation(deleteCardStack, deleteStackParams)) as { data: DeleteCardStackMutation };
    }
  }


}

