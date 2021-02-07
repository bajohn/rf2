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
  StacksByRoomQuery,
  StacksByRoomQueryVariables,

} from '../API.service';


import Observable from 'zen-observable-ts';
import { PlayerService } from './player.service';
import { RoomService } from './room.service';
import { updateMoveable } from 'src/graphql/mutations';
import { card, cardStack, moveable } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MoveableService {

  private cards: card[];
  private readonly lookup: { [key: string]: card | cardStack } = {}; // moveableId->flattened obj
  private inMotion: moveable[] = [];


  //consts
  public readonly CARD_H = 105;
  public readonly CARD_W = 75;
  public readonly UPDATE_MIN_MS = 100;

  // DEBUG
  AC_ID = '';

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
    const resp = await API.graphql(graphqlOperation(stacksByRoomFull, listParams)) as { data: CardsByRoomFullQuery };
    console.log(resp);

  }

  private async listCards() {
    const listParams: CardsByRoomQueryVariables = {
      roomId: this.roomService.id
    };
    const resp = await API.graphql(graphqlOperation(cardsByRoomFull, listParams)) as { data: CardsByRoomFullQuery };
    const roomCardsResp = resp.data.cardsByRoom.items;

    this.cards = roomCardsResp.map(el => {
      const cardObj: card = {
        id: el.id,
        roomId: this.roomService.id,
        cardValue: el.cardValue,
        moveableId: el.moveable.id,
        x: el.moveable.x,
        y: el.moveable.y,
        z: el.moveable.z,
        inMotion: el.moveable.inMotion,
        faceUp: el.faceUp,
        lastUpdated: (new Date(el.moveable.updatedAt)).getTime(),
        lastOwner: el.moveable.lastOwner,
        draggable: true,
        highlight: false
      };
      this.lookup[el.moveable.id] = cardObj;
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

  private isCard(moveableIn: card | cardStack) {
    return 'cardValue' in moveableIn;
  }

  public mouseMove(event: MouseEvent) {
    const curTime = (new Date()).getTime();
    this.inMotion.forEach(obj => {

      const x = event.x;
      const y = event.y;

      obj.x = Math.round(x - this.CARD_W / 2);
      obj.y = Math.round(y - this.CARD_H / 2);

      for (const card of this.cards) {
        card.highlight = this.inCard(card, x, y);
      }

      if (curTime - obj.lastUpdated > this.UPDATE_MIN_MS) {

        obj.lastUpdated = curTime;
        const moveableParams: UpdateMoveableMutationVariables = {
          input: {
            id: obj.moveableId,
            x: obj.x,
            y: obj.y,
            z: obj.z,
            lastOwner: this.playerService.id,
            inMotion: obj.inMotion,
          }
        };
        API.graphql(graphqlOperation(updateMoveable, moveableParams));
      }
    });
  }

  private inCard(card, mouseX, mouseY) {
    return card.x < mouseX &&
      mouseX < card.x + this.CARD_W &&
      card.y < mouseY &&
      mouseY < card.y + this.CARD_H;

  }

  public mouseDown(id: string) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj)) {
      moveableObj.inMotion = true;
      this.inMotion.push(moveableObj);
    }
  }

  public mouseUp() {
    this.inMotion.forEach(moveable => {
      moveable.inMotion = false;
    });
    this.inMotion = [];
    for (const card of this.cards) {
      card.highlight = false;
    }
  }

  public beingDragged(id: string) {
    const moveableObj = this.lookupMoveable(id);
    return moveableObj.inMotion;
  }

  public getHeight(id) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj)) {
      return this.CARD_H + 'px';
    }
  }

  public getWidth(id) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj)) {
      return this.CARD_W + 'px';
    }
  }

  public getTransform(id) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj)) {
      return `translate3d(${moveableObj.x}px, ${moveableObj.y}px, 0px)`;
    }
  }

  public getZ(id) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj)) {
      return moveableObj.z;
    }
  }

  public isHighlighted(id) {
    const moveableObj = this.lookupMoveable(id);
    if (this.isCard(moveableObj)) {
      const card = moveableObj as card;
      return card.highlight;
    }
  }

  public getCards(): card[] {
    return this.cards;
  }

  private lookupMoveable(id): card | cardStack {
    return this.lookup[id];
  }



}

