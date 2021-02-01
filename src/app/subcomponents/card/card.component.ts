import { Component, Input, OnInit } from '@angular/core';
import { MoveableService } from 'src/app/services/moveable.service';
import { card } from 'src/app/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: card;
  constructor(public moveableService: MoveableService) { }

  ngOnInit(): void {
  }

}
