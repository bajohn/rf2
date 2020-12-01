import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { ListCardsQuery, ListCardsQueryVariables, OnUpdateCardSubscription, OnUpdateCardSubscriptionVariables, UpdateCardInput, UpdateCardMutationVariables } from 'src/app/API.service';
import { MatDialog } from '@angular/material/dialog';
import { PlayerNameDialogComponent } from 'src/app/subcomponents/player-name-dialog/player-name-dialog.component';
import { ModalService } from 'src/app/services/modal.service';

import { API, graphqlOperation } from 'aws-amplify';
import Observable from 'zen-observable-ts';
import { onUpdateCard, onUpdateCardRoom } from 'src/graphql/subscriptions';
import { listCards } from 'src/graphql/queries';
import { updateCard } from 'src/graphql/mutations';

interface localCard {
  cardValue: string
  cardX: number
  cardY: number
  cardZ: number
  cardBeingDragged: boolean,
  faceUp: boolean
  lastUpdateTime: number
  lastOwner: string
}

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public readonly playerId: string;
  public readonly roomId: string;
  public cards: { [key: string]: localCard } = {};
  public cardValues: string[] = [];

  private readonly cardHeight = 105;
  private readonly cardWidth = 75;
  private readonly updateMinMs = 100;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private modalService: ModalService,
  ) {
    const roomId = this.router.url.substring(1);
    this.roomId = roomId;
    this.playerId = this.getPlayerId(roomId);
  }

  ngOnInit(): void {
    this.initRoom();
    this.listCards();
  }

  async initRoom() {
    // const room = await this.api.GetRoom(this.roomId);
    // console.log('room', room);
    // const resp = await this.api.PlayerbyRoom(this.roomId, {
    //   eq: this.playerId
    // });

    // if (resp.items.length === 0) {
    //   this.playerNameDialog();
    // } else {
    //   const player = resp.items[0];
    //   console.log('player', player);
    // }
  }

  playerNameDialog() {

    const dialogRef = this.dialog.open(PlayerNameDialogComponent, {
      width: '250px',
      data: { playerId: this.playerId, roomId: this.roomId }
    });
    this.modalService.setModalRef(dialogRef);
  }

  async listCards() {
    // const resp = await this.api.ListCards();
    const cardParams: ListCardsQueryVariables = {
      roomId: this.roomId
    };
    const resp = await API.graphql(graphqlOperation(listCards, cardParams)) as { data: ListCardsQuery };
    console.log(resp);
    this.cardValues = resp.data.listCards.items.map(el => el.cardValue);
    for (const card of resp.data.listCards.items) {
      const cardObjToPush: localCard = {
        cardValue: card.cardValue,
        cardX: card.x,
        cardY: card.y,
        cardZ: card.z,
        cardBeingDragged: false,
        faceUp: card.faceUp,
        lastUpdateTime: 0,
        lastOwner: card.lastOwner
      }
      this.cards[card.cardValue] = cardObjToPush;
    }

    // All cards of room in one subscription
    const vars: OnUpdateCardSubscriptionVariables = {
      roomId: this.roomId,
    };
    console.log(vars);
    const obs = API.graphql(graphqlOperation(onUpdateCardRoom, vars)) as Observable<object>;
    obs.subscribe({
      next: (resp: { value: { data: OnUpdateCardSubscription } }) => {
        console.log(resp);
      }
    });

    // One card at a time:
    // const vars: OnUpdateCardSubscriptionVariables = {
    //   roomId: this.roomId,
    //   cardValue: 'AD'
    // };
    // console.log(vars);
    // const obs = API.graphql(graphqlOperation(onUpdateCard, vars)) as Observable<object>;
    // obs.subscribe({
    //   next: (resp: { value: { data: OnUpdateCardSubscription } }) => {
    //     console.log(resp);
    //   }
    // });



  }

  getPlayerId(roomId) {
    const roomKey = 'rfRoomId_' + roomId;
    const curPlayerId = localStorage.getItem(roomKey);
    if (curPlayerId === null) {
      const newPlayerId = uuidv4();
      localStorage.setItem(roomKey, newPlayerId);
      return newPlayerId;
    } else {
      return curPlayerId;
    }
  }

  mouseMove(event: MouseEvent) {
    for (const cardValue of this.cardValues) {
      const curCard = this.cards[cardValue];
      if (curCard.cardBeingDragged) {
        const curTime = (new Date()).getTime();
        const x = event.x;
        const y = event.y;

        curCard.cardX = Math.round(x - this.cardWidth / 2);
        curCard.cardY = Math.round(y - this.cardHeight / 2);
        if (curTime - curCard.lastUpdateTime > this.updateMinMs) {
          curCard.lastUpdateTime = curTime;
          this.publishUpdate(curCard);
        }
      }
    }
  }

  async publishUpdate(curCard: localCard) {

    const cardUpdate: UpdateCardMutationVariables = {
      input: {
        roomId: this.roomId,
        cardValue: curCard.cardValue,
        x: curCard.cardX,
        y: curCard.cardY,
        lastOwner: this.playerId
      }
    };

    const resp = await API.graphql(graphqlOperation(updateCard, cardUpdate));
  }

  getWidth() {
    return this.cardWidth + 'px';
  }

  getHeight() {
    return this.cardHeight + 'px';
  }

  getFrontImgSrc(cardValue) {
    return `assets/cards/${cardValue}.svg`;
  }

  getTransform(cardValue) {
    const curCard = this.cards[cardValue];
    return `translate3d(${curCard.cardX}px, ${curCard.cardY}px, 0px)`;
  }

  mouseUp() {
    for (const cardValue of this.cardValues) {
      const curCard = this.cards[cardValue];
      if (curCard.cardBeingDragged) {
        this.publishUpdate(curCard);
        curCard.cardBeingDragged = false;
      }
    }


  }

  mouseDown(cardValue) {
    this.cards[cardValue].cardBeingDragged = true;

  }

  cardBeingDragged(cardValue) {
    return this.cards[cardValue].cardBeingDragged;
  }


  getZ(cardValue) {
    return this.cards[cardValue].cardZ;
  }


}
