import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { cardsByRoomFull } from 'src/graphql/customqueries';
import { onUpdateMoveable } from 'src/graphql/subscriptions';
import { CardsByRoomFullQuery, CardsByRoomQueryVariables, OnUpdateMoveableSubscription, UpdateMoveableMutationVariables } from '../API.service';
import Observable from 'zen-observable-ts';
import { PlayerService } from './player.service';
import { RoomService } from './room.service';
import { updateMoveable } from 'src/graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class MoveableService {

  private readonly cards: card[];
  private readonly lookup: moveable[];

  //consts
  public readonly CARD_H = 105;
  public readonly CARD_W = 75;
  public readonly UPDATE_MIN_MS = 100;

  constructor(
    private playerService: PlayerService,
    private roomService: RoomService

  ) {
    this.listCards();

  }

  // cut from room.component
  // TODO finish this!
  private async listCards() {
    const listParams: CardsByRoomQueryVariables = {
      roomId: this.roomService.id
    };
    const resp = await API.graphql(graphqlOperation(cardsByRoomFull, listParams)) as { data: CardsByRoomFullQuery };
    const roomCardsResp = resp.data.cardsByRoom.items;
    console.log(roomCardsResp);

    roomCardsResp.forEach(el => {
      const cardObjToPush: card = {
        id: el.moveable.id,
        roomId: this.roomService.id,
        cardValue: el.cardValue,
        x: el.moveable.x,
        y: el.moveable.y,
        z: el.moveable.z,
        inMotion: el.moveable.inMotion,
        faceUp: el.faceUp,
        lastUpdated: (new Date(el.moveable.updatedAt)).getTime(),
        lastOwner: el.moveable.lastOwner,
        draggable: true

      }
      this.cards[el.cardValue] = cardObjToPush;
    });

    // Shouldn't need this anymore
    //this.cardValues = this.cards.map(el => el.cardValue);

    // All cards of room in one subscription
    // // 
    // One subcsription per moveable
    const vars = {
      roomId: this.roomService.id,
    };
    // TODO: can this specific type be specified in autogenerated ts?
    // should be OnUpdateCardSubscription insteady of `any`
    const obs = API.graphql(graphqlOperation(onUpdateMoveable, vars)) as Observable<object>;

    obs.subscribe({
      next: (resp: { value: { data: OnUpdateMoveableSubscription } }) => {
        console.log('trigger');
        const updatedCard = resp.value.data.onUpdateMoveable;

        const localCard = this.cards['AD'];
        const updateTime = (new Date(updatedCard.updatedAt)).getTime();
        if (!localCard.inMotion
          && this.playerService.id !== updatedCard.lastOwner
          && updateTime > localCard.lastUpdateTime) {
          const copyProps = {
            cardX: updatedCard.x,
            cardY: updatedCard.y,
            cardZ: updatedCard.z,
            //faceUp: updatedCard.faceUp,
            lastOwner: updatedCard.lastOwner,
            lastUpdateTime: updateTime
          };
          Object.assign(localCard, copyProps);
        }

      }
    });
     
  }

  publishCardUpdate(event: MouseEvent) {
    for (const card of this.cards) {
      // const curCard = this.cards[cardValue];
      if (card.inMotion) {
        const curTime = (new Date()).getTime();
        const x = event.x;
        const y = event.y;

        card.x = Math.round(x - this.CARD_W / 2);
        card.y = Math.round(y - this.CARD_H / 2);
        if (curTime - card.lastUpdated > this.UPDATE_MIN_MS) {
          card.lastUpdated = curTime;
          // change to moveable 
          const moveableParams: UpdateMoveableMutationVariables = {
            input: {
              id: card.id,
              x: card.x,
              y: card.y,
              z: card.z,
              lastOwner: this.playerService.id,
              inMotion: card.inMotion,
            }
          };

          API.graphql(graphqlOperation(updateMoveable, moveableParams));
        }
      }
    }

  }
}