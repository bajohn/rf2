import { Component, OnInit } from '@angular/core';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rf2';
  cardValue = 'JH'

  constructor(private api: APIService) {

  }

  ngOnInit() {
    // this.createCard();
  }

  createCard() {
    // one-off
    this.api.CreateCard({
      'cardValue': 'JH',
      'gameId': '1',
      'x': 100,
      'y': 150,
      'z': 1,
      'faceUp': true
    });
  }



  getFrontImgSrc() {
    return `assets/cards/${this.cardValue}.svg`;
  }
  getTransform() {
    return `translate3d(${10}px, ${10}px, 0px)` //`translateX(${position.x}px) translateY(${position.y}px)`,
  }
}


