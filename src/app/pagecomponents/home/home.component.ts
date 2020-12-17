import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API, graphqlOperation } from 'aws-amplify';
import { CardsByRoomQueryVariables, CreateCardInput, CreateCardMutation, CreateCardMutationVariables, CreateMoveableInput, CreateMoveableMutation, CreateMoveableMutationVariables, CreateRoomMutation, CreateRoomMutationVariables, GetCardQuery, GetCardQueryVariables, ListCardsQuery } from 'src/app/API.service';
import { createCard, createMoveable, createRoom } from 'src/graphql/mutations';
import { cardsByRoom, getCard, listCards } from 'src/graphql/queries';

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

  async clickCreate() {

    const roomId = uuidv4().split('-')[0];

    const roomParams: CreateRoomMutationVariables = {
      input: {
        id: roomId,
        gameType: 'generic'
      }
    };

    const resp = await API.graphql(graphqlOperation(createRoom, roomParams)) as { data: CreateRoomMutation };
    await this.generateDeck(roomId);


    this.router.navigateByUrl(roomId);
  }

  async generateDeck(roomId) {
    const suits = ['H', 'C', 'S', 'D'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let z = 0;
    const promises = [];
    for (const suit of suits) {
      for (const value of values) {
        const cardValue = `${value}${suit}`;

        const moveableParams: CreateMoveableMutationVariables = {
          input: {
            draggable: true,
            inMotion: false,
            lastOwner: 'none',
            'x': 100,
            'y': 150,
            'z': z,
          }
        }

        const moveResp = (await API.graphql(graphqlOperation(createMoveable, moveableParams))) as { data: CreateMoveableMutation };
        console.log('done', moveResp.data.createMoveable);
        const id = moveResp.data.createMoveable.id;


        const cardParams: CreateCardMutationVariables = {
          input: {
            'cardValue': cardValue,
            faceUp: true,
            ownerId: 'none',
            roomId: roomId,
            cardMoveableId: id
          }
        };

        const resp = await API.graphql(graphqlOperation(createCard, cardParams)) as { data: CreateCardMutation };
        console.log('done', resp.data);

        promises.push(API.graphql(graphqlOperation(createCard, cardParams)));
        z += 1;
      }
    }
    const resps = await Promise.all(promises) as CreateCardMutation[];
    console.log(resps);
  }








}
