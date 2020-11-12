import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public readonly playerId: string;
  public readonly roomId: string;

  constructor(
    private router: Router,
  ) {
    const roomId = this.router.url.substring(1);
    this.roomId = roomId;
    this.playerId = this.getPlayerId(roomId);
  }

  ngOnInit(): void {
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


}
