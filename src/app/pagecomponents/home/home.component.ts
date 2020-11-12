import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../API.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private api: APIService
  ) { }

  ngOnInit(
  ): void {
  }

  clickCreate() {

    const roomId = uuidv4().split('-')[0];

    this.api.CreateRoom({
      roomId: roomId
    });
    this.router.navigateByUrl(roomId);

    const suits = ['H', 'C', 'S', 'D'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let z = 0;
    for (const suit of suits) {
      for (const value of values) {
        const cardValue = `${value}${suit}`;
        this.api.CreateCard({
          'cardValue': cardValue,
          'roomId': roomId,
          'x': 100,
          'y': 150,
          'z': z,
          'faceUp': true,
          'lastOwner': ''
        });
        z += 1;
      }
    }
  }





}
