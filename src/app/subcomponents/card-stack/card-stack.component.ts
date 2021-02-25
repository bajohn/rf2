import { Component, Input, OnInit } from '@angular/core';
import { MoveableService } from 'src/app/services/moveable.service';
import { StackService } from 'src/app/services/stack.service';
import { cardStack } from 'src/app/types';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css']
})
export class CardStackComponent implements OnInit {
  @Input() stack: cardStack;
  constructor(
    public moveableService: MoveableService,
    private stackService: StackService
  ) { }

  ngOnInit(): void {
  }

  topCard() {
    const cards = this.stack.cards;
    if (cards.length > 0) {
      return cards[cards.length - 1];
    } else {
      return null;
    }
  }

  topCardImg() {
    const cardValue = this.topCard().cardValue;
    return `assets/cards/${cardValue}.svg`;
  }


  baseHit(event: MouseEvent) {
    const offsetX = event.x - this.stack.x;
    const offsetY = event.y - this.stack.y;
    console.log(offsetX, offsetY, this.moveableService.CARD_W, this.moveableService.CARD_H);
    if (offsetY > this.moveableService.CARD_H) {
      this.moveableService.mouseDown(this.stack.moveableId);
    } else {
      const topCard = this.stack.cards.pop();
      this.moveableService.mouseDown(topCard.moveableId);
    }
  }



}
