import { Component, OnInit } from '@angular/core';
import { APIService, OnCreateCardSubscription, OnUpdateCardSubscription, UpdateCardInput } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rf2';

  cardBeingDragged = false;
  constructor(private api: APIService) {

  }
  cardX = 0;
  cardY = 0;
  cardHeight = 105;
  cardWidth = 75;
  ctr = 0;
  lastUpdateTime = 0;
  updateMinMs = 100;
  gameId = '1';
  cardValue = 'JH';

  ngOnInit() {
    // this.createCard();
    this.listCards();
    this.api.OnUpdateCardListener.subscribe((event: any) => {
      // Unsure why we have to dig value.data.
      const cardUpdate: OnUpdateCardSubscription = event.value.data.onUpdateCard
      console.log(cardUpdate);
      console.log(cardUpdate.x, cardUpdate.y);
      if (!this.cardBeingDragged) {
        this.cardX = cardUpdate.x;
        this.cardY = cardUpdate.y
      }
    })
  }

  async listCards() {
    const cards = await this.api.ListCards();
    console.log(cards);
    const curCard = cards.items[0];
    this.cardX = curCard.x;
    this.cardY = curCard.y;
  }

  createCard() {
    // one-off card creator
    this.api.CreateCard({
      'cardValue': this.cardValue,
      'gameId': this.gameId,
      'x': 100,
      'y': 150,
      'z': 1,
      'faceUp': true
    });
  }

  mouseDown() {
    this.cardBeingDragged = true;
    console.log(true);
  }

  mouseUp() {
    this.cardBeingDragged = false;
    console.log(false);
  }



  getFrontImgSrc() {
    return `assets/cards/${this.cardValue}.svg`;
  }
  getTransform() {
    return `translate3d(${this.cardX}px, ${this.cardY}px, 0px)` //`translateX(${position.x}px) translateY(${position.y}px)`,
  }

  renderDrag(event: MouseEvent) {
    const x = event.x;
    const y = event.y;
    if (this.cardBeingDragged) {
      this.ctr += 1;
      this.cardX = x - this.cardWidth / 2;
      this.cardY = y - this.cardWidth / 2;
      const curTime = (new Date()).getTime();
      if (curTime - this.lastUpdateTime > this.updateMinMs) {
        this.lastUpdateTime = curTime;
        console.log(x, y);
        const cardUpdate: UpdateCardInput = {
          gameId: this.gameId,
          cardValue: this.cardValue,
          x: x,
          y: y
        }
        this.api.UpdateCard(cardUpdate);
      }
    }
  }
}


