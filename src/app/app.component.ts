import { Component, OnInit } from '@angular/core';
import { APIService, ModelCardFilterInput, OnCreateCardSubscription, OnUpdateCardSubscription, UpdateCardInput } from './API.service';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api'
import { v4 as uuidv4 } from 'uuid';


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
  playerId = uuidv4();
  updateMinMs = 100;
  gameId = '1';
  cardValue = 'JH';

  ngOnInit() {



    this.api.OnUpdateCardListener.subscribe((event: any) => {
      // Unsure why we have to dig value.data.
      const cardUpdate: OnUpdateCardSubscription = event.value.data.onUpdateCard
      cardUpdate.lastOwner;
      const updateTime = (new Date(cardUpdate.updatedAt)).getTime();

      if (!this.cardBeingDragged && cardUpdate.lastOwner !== this.playerId) {
        console.log('render from backend');
        this.cardX = cardUpdate.x;
        this.cardY = cardUpdate.y
      }
    })
    this.listCards();
  }

  async listCards() {
    const query = `
        {
          listCards(gameId: "1") {
            items {
              cardValue
              createdAt
              faceUp
              gameId
              updatedAt
              x
              y
              z
            }
            nextToken
          }
        }    
        `
    // const cards = await this.api.ListCards();
    const resp = await API.graphql(graphqlOperation(query)) as GraphQLResult<any>;
    const curCard = resp.data.listCards.items;
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
      'faceUp': true,
      'lastOwner': this.playerId
    });
  }

  mouseDown() {
    this.cardBeingDragged = true;
  }

  mouseUp() {
    if (this.cardBeingDragged) {
      this.publishUpdate();
    }
    const curTime = (new Date()).getTime();
    this.lastUpdateTime = curTime;
    this.cardBeingDragged = false;
    console.log('mouse up');
  }



  getFrontImgSrc() {
    return `assets/cards/${this.cardValue}.svg`;
  }
  getTransform() {
    return `translate3d(${this.cardX}px, ${this.cardY}px, 0px)` //`translateX(${position.x}px) translateY(${position.y}px)`,
  }

  renderDrag(event: MouseEvent) {

    const curTime = (new Date()).getTime();
    if (this.cardBeingDragged) {
      const x = event.x;
      const y = event.y;

      this.ctr += 1;
      this.cardX = Math.round(x - this.cardWidth / 2);
      this.cardY = Math.round(y - this.cardWidth / 2);
      if (curTime - this.lastUpdateTime > this.updateMinMs) {
        this.lastUpdateTime = curTime;
        this.publishUpdate();
      }
    }
  }

  publishUpdate() {
    console.log('pub');
    const cardUpdate: UpdateCardInput = {
      gameId: this.gameId,
      cardValue: this.cardValue,
      x: this.cardX,
      y: this.cardY,
      lastOwner: this.playerId
    }
    console.log(cardUpdate);
    this.api.UpdateCard(cardUpdate);

  }
}


