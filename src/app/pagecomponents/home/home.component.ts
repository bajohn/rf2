import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API, graphqlOperation } from 'aws-amplify';
import { CreateCardInput, CreateCardMutation, CreateCardMutationVariables, CreateMoveableInput, CreateMoveableMutation, CreateMoveableMutationVariables, GetCardQuery, GetCardQueryVariables, ListCardsQuery } from 'src/app/API.service';
import { createCard, createMoveable, createRoom } from 'src/graphql/mutations';
import { getCard, listCards } from 'src/graphql/queries';

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
    this.initRoom();
  }

  async initRoom() {
    // const resp = await API.graphql(graphqlOperation(listCards)) as { data: ListCardsQuery };
    // console.log(resp.data);
    const cardParams: GetCardQueryVariables = {
      id: 'ae5e344c-ce85-42e6-abe1-32f834021078'
    };
    const resp = await API.graphql(graphqlOperation(getCard, cardParams)) as { data: GetCardQuery };
    console.log(resp);

  }

  async clickCreate() {

    // const roomId = uuidv4().split('-')[0];

    // const roomParams = {
    //   input: {
    //     roomId: roomId
    //   }
    // };
    //const resp = await API.graphql(graphqlOperation(createRoom, roomParams)) as { data };

    // await this.generateDeck(roomId);


    // this.router.navigateByUrl(roomId);

    const moveableParams: CreateMoveableMutationVariables = {
      input: {
        draggable: true,
        inMotion: false,
        lastOwner: '',
        x: 10,
        y: 10,
        z: 10,
      }
    }



    const moveResp = (await API.graphql(graphqlOperation(createMoveable, moveableParams))) as { data: CreateMoveableMutation };
    console.log('done', moveResp.data.createMoveable);
    const id = moveResp.data.createMoveable.id;


    const cardParams: CreateCardMutationVariables = {
      input: {
        cardValue: 'JH',
        faceUp: true,
        ownerId: 'none',
        roomId: 'abcd',
        cardMoveableId: id
      }
    };

    const resp = await API.graphql(graphqlOperation(createCard, cardParams)) as { data: CreateCardMutation };
    console.log('done', resp.data);




  }

  async generateDeck(roomId) {
    const suits = ['H', 'C', 'S', 'D'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let z = 0;
    const promises = [];
    for (const suit of suits) {
      for (const value of values) {
        const cardValue = `${value}${suit}`;
        const cardParams = {
          input: {
            'cardValue': cardValue,
            'roomId': roomId,
            'x': 100,
            'y': 150,
            'z': z,
            'faceUp': true,
            'lastOwner': ''
          }
        };

        promises.push(API.graphql(graphqlOperation(createCard, cardParams)));
        z += 1;
      }
    }
    const resps = await Promise.all(promises);
  }





}
