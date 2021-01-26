import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { PlayerNameDialogComponent } from 'src/app/subcomponents/player-name-dialog/player-name-dialog.component';
import { ModalService } from 'src/app/services/modal.service';

import { API, graphqlOperation } from 'aws-amplify';
import { playersByRoom } from 'src/graphql/queries';
import { PlayersByRoomQuery, PlayersByRoomQueryVariables } from 'src/app/API.service';
import { PlayerService } from 'src/app/services/player.service';
import { MoveableService } from 'src/app/services/moveable.service';
import { RoomService } from 'src/app/services/room.service';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {


  constructor(
    private dialog: MatDialog,
    private modalService: ModalService,
    public playerService: PlayerService,
    public moveableService: MoveableService,
    public roomService: RoomService
  ) {

  }

  ngOnInit(): void {
    this.initRoom();
  }

  async initRoom() {
    const playerParams: PlayersByRoomQueryVariables = {
      roomId: this.roomService.id,
      id: {
        eq: this.playerService.id
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
      data: { playerId: this.playerService.id, roomId: this.roomService.id }
    });
    this.modalService.setModalRef(dialogRef);
  }

  mouseMove(event: MouseEvent) {
    this.moveableService.mouseMove(event);
  }

  // getFrontImgSrc(cardValue) {
  //   return `assets/cards/${cardValue}.svg`;
  // }

}
