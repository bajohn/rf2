import { Component, Inject, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { API, graphqlOperation } from 'aws-amplify';
import { createPlayer } from 'src/graphql/mutations';
import { CreatePlayerMutation, CreatePlayerMutationVariables } from 'src/app/API.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-name-dialog',
  templateUrl: './player-name-dialog.component.html',
  styleUrls: ['./player-name-dialog.component.css']
})
export class PlayerNameDialogComponent implements OnInit {

  public playerName = '';
  public roomid;
  constructor(
    private modalService: ModalService,
    private playerService: PlayerService,
    @Inject(MAT_DIALOG_DATA) public data: { playerId: string, roomId: string }
  ) {

  }

  ngOnInit(): void {
  }


  clickEnter() {
    //this.playerService.setPlayerName(this.playerName)
    this.completeModal();

  }
  keyPress(keyEvent: KeyboardEvent) {
    // if (keyEvent.key === 'Enter' && this.canClose()) {
    //   this.completeModal();
    // }
  }

  async completeModal() {
    this.modalService.getModalRef().close();
    this.playerService.name = this.playerName;
    const playerParams: CreatePlayerMutationVariables = {
      input: {
        name: this.playerName,
        roomId: this.data.roomId,
        id: this.data.playerId
      }
    };
    const resp = await API.graphql(graphqlOperation(createPlayer, playerParams));
  }

  canClose() {
    return this.playerName.length > 0;
  }

}
