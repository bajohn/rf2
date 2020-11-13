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


  private lastUpdateTime = 0;
  @Input() playerId: string;
  @Input() roomId: string;
  @Input() cardValue: string;



  constructor() {

  }

  ngOnInit() {

    // this.initCard();






  }



  // async initCard() {
  //   const card = await this.api.GetCard(this.roomId, this.cardValue);
  //   console.log(card);
  //   this.cardX = card.x;
  //   this.cardY = card.y;
  //   this.cardZ = card.z;
  // }





  






}
