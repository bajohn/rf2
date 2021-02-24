import { Component, Input, OnInit } from '@angular/core';
import { MoveableService } from 'src/app/services/moveable.service';
import { cardStack } from 'src/app/types';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css']
})
export class CardStackComponent implements OnInit {
  @Input() stack: cardStack;
  constructor(public moveableService: MoveableService) { }

  ngOnInit(): void {
  }

  topCard() {
    const cards = this.stack.cards;
    if (cards.length > 0) {

      const cardValue = cards[cards.length - 1].cardValue;
      return `assets/cards/${cardValue}.svg`;
    } else {
      return '';
    }

  }



}
