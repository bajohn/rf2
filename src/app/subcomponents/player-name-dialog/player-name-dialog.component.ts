import { Component, Inject, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/app/API.service';
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
    private api: APIService,
    @Inject(MAT_DIALOG_DATA) public data: { playerId: string, roomId: string }
  ) {

  }

  ngOnInit(): void {
    console.log(this.data)
  }


  clickEnter() {
    //this.playerService.setPlayerName(this.playerName)
    this.completeModal();

  }
  keyPress(keyEvent: KeyboardEvent) {
    console.log(this.playerName);
    // if (keyEvent.key === 'Enter' && this.canClose()) {
    //   this.completeModal();
    // }
  }

  completeModal() {
    this.modalService.getModalRef().close();
    this.api.CreatePlayer({
      name: this.playerName,
      roomId: this.data.roomId,
      playerId: this.data.playerId
    });
  }

  canClose() {
    return this.playerName.length > 0;
  }

}
