import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(
  ): void {
  }

  click_create() {

    const roomId = uuidv4().split('-')[0];
    console.log(roomId);
    this.router.navigateByUrl(roomId);
    // if (this.createAttempts >= 3) {
    //   this.errorMsg = 'Error creating room. 3 attempts failed.';
    // } else {
    //   this.createInProgress = true;
    //   this.createAttempts++;
    //   const newGameId = this.getRandomString(6);
    //   // Send newly generated game id to backend
    //   // in an initialize message. This should
    //   // return gameExists == false, because the
    //   // game has not been created yet.
    //   this.ws.setGameId(newGameId);
    //   this.ws.sendToWs('initialize', {});
    // }
  }

}
