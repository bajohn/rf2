import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { MatDialog } from '@angular/material/dialog';
import { PlayerNameDialogComponent } from 'src/app/subcomponents/player-name-dialog/player-name-dialog.component';
import { ModalService } from 'src/app/services/modal.service';

import { API, graphqlOperation } from 'aws-amplify';
import Observable from 'zen-observable-ts';
//import { onUpdateCardRoom } from 'src/graphql/subscriptions';
//import { listCards, playerbyRoom } from 'src/graphql/queries';
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

  constructor() {
  }
  ngOnInit() {
  }

}
