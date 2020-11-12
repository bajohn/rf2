import { Component, Input, OnInit } from '@angular/core';
import { APIService, ModelCardFilterInput, OnCreateCardSubscription, OnUpdateCardSubscription, UpdateCardInput } from '../../API.service';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public cardBeingDragged = false;
  private cardX = 0;
  private cardY = 0;
  private readonly cardHeight = 105;
  private readonly cardWidth = 75;

  private lastUpdateTime = 0;
  @Input() playerId: string;
  updateMinMs = 100;
  gameId = '1';
  cardValue = 'JH';

  constructor(private api: APIService) {

  }

  ngOnInit() {



    this.api.OnUpdateCardListener.subscribe((event: any) => {
      // Unsure why we have to dig value.data.
      const cardUpdate: OnUpdateCardSubscription = event.value.data.onUpdateCard
      cardUpdate.lastOwner;

      if (!this.cardBeingDragged && cardUpdate.lastOwner !== this.playerId) {
        this.cardX = cardUpdate.x;
        this.cardY = cardUpdate.y
      }
    })


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

  // one-off card creator
  createCard() {
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
    this.cardBeingDragged = false;
    console.log('mouse up');
  }

  mouseMove(event: MouseEvent) {
    if (this.cardBeingDragged) {
      const curTime = (new Date()).getTime();
      const x = event.x;
      const y = event.y;

      this.cardX = Math.round(x - this.cardWidth / 2);
      this.cardY = Math.round(y - this.cardHeight / 2);
      if (curTime - this.lastUpdateTime > this.updateMinMs) {
        console.log('move');
        this.lastUpdateTime = curTime;
        this.publishUpdate();
      }
    }
  }

  getFrontImgSrc() {
    return `assets/cards/${this.cardValue}.svg`;
  }

  getTransform() {
    return `translate3d(${this.cardX}px, ${this.cardY}px, 0px)`;
  }


  publishUpdate() {
    const cardUpdate: UpdateCardInput = {
      gameId: this.gameId,
      cardValue: this.cardValue,
      x: this.cardX,
      y: this.cardY,
      lastOwner: this.playerId
    }
    this.api.UpdateCard(cardUpdate);

  }

  getWidth() {
    return this.cardWidth + 'px';
  }

  getHeight() {
    return this.cardHeight + 'px';
  }

}
