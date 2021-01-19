import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { MatDialog } from '@angular/material/dialog';
import { PlayerNameDialogComponent } from 'src/app/subcomponents/player-name-dialog/player-name-dialog.component';
import { ModalService } from 'src/app/services/modal.service';

import { API, graphqlOperation } from 'aws-amplify';
import Observable from 'zen-observable-ts';
import { onUpdateCard, onUpdateMoveable } from 'src/graphql/subscriptions';
import { updateCard, updateMoveable } from 'src/graphql/mutations';
import { cardsByOwner, cardsByRoom, getCard, getMoveable, listCards, playersByRoom } from 'src/graphql/queries';
import { CardsByRoomFullQuery, CardsByRoomQuery, CardsByRoomQueryVariables, GetCardQuery, GetCardQueryVariables, GetMoveableQueryVariables, ListCardsQuery, ListCardsQueryVariables, OnUpdateMoveableSubscription, PlayersByRoomQuery, PlayersByRoomQueryVariables, UpdateCardMutationVariables, UpdateMoveableMutationVariables } from 'src/app/API.service';
import { cardsByRoomFull } from 'src/graphql/customqueries';
import { PlayerService } from 'src/app/services/player.service';

interface localCard {
  cardValue: string
  cardX: number
  cardY: number
  cardZ: number
  inMotion: boolean,
  faceUp: boolean
  lastUpdateTime: number
  lastOwner: string
  moveableId: string
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
    private playerService: PlayerService
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
    const playerParams: PlayersByRoomQueryVariables = {
      roomId: this.roomId,
      id: {
        eq: this.playerId
      }
    };
    const resp = await API.graphql(graphqlOperation(playersByRoom, playerParams)) as { data: PlayersByRoomQuery };
    this.playerService.playerNameFromResp(resp.data);

    if (this.playerService.name === '') {
      this.playerNameDialog();
    }
  }

  playerNameDialog() {

    const dialogRef = this.dialog.open(PlayerNameDialogComponent, {
      width: '250px',
      data: { playerId: this.playerId, roomId: this.roomId }
    });
    this.modalService.setModalRef(dialogRef);
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
      if (curCard.inMotion) {
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

  publishUpdate(curCard: localCard) {
    console.log('pub');
    console.log(curCard);
    // change to moveable 
    const moveableParams: UpdateMoveableMutationVariables = {
      input: {
        id: curCard.moveableId,
        x: curCard.cardX,
        y: curCard.cardY,
        z: curCard.cardZ,
        lastOwner: this.playerId,
        inMotion: curCard.inMotion
      }
    };

    API.graphql(graphqlOperation(updateMoveable, moveableParams));
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
      if (curCard.inMotion) {
        curCard.inMotion = false;
        this.publishUpdate(curCard);
      }
    }


  }

  mouseDown(cardValue) {
    this.cards[cardValue].inMotion = true;

  }

  cardBeingDragged(cardValue) {
    return this.cards[cardValue].inMotion;
  }


  getZ(cardValue) {
    return this.cards[cardValue].cardZ;
  }

}
