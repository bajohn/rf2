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
  public cardZ = 0;
  private readonly cardHeight = 105;
  private readonly cardWidth = 75;

  private lastUpdateTime = 0;
  @Input() playerId: string;
  @Input() roomId: string;
  @Input() cardValue: string;
  updateMinMs = 100;


  constructor(private api: APIService) {

  }

  ngOnInit() {

    this.initCard();

    this.api.OnUpdateCardListener.subscribe((event: any) => {
      // Unsure why we have to dig value.data.
      const cardUpdate: OnUpdateCardSubscription = event.value.data.onUpdateCard;

      if (!this.cardBeingDragged && cardUpdate.lastOwner !== this.playerId) {
        this.cardX = cardUpdate.x;
        this.cardY = cardUpdate.y;
        this.cardZ = cardUpdate.z;
      }
    })




  }



  async initCard() {
    const card = await this.api.GetCard(this.roomId, this.cardValue);
    console.log(card);
    this.cardX = card.x;
    this.cardY = card.y;
    this.cardZ = card.z;
  }

  mouseDown() {
    this.cardBeingDragged = true;
  }

  mouseUp() {
    if (this.cardBeingDragged) {
      this.publishUpdate();
    }
    this.cardBeingDragged = false;
  }

  mouseMove(event: MouseEvent) {
    if (this.cardBeingDragged) {
      const curTime = (new Date()).getTime();
      const x = event.x;
      const y = event.y;

      this.cardX = Math.round(x - this.cardWidth / 2);
      this.cardY = Math.round(y - this.cardHeight / 2);
      if (curTime - this.lastUpdateTime > this.updateMinMs) {
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
      roomId: this.roomId,
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
