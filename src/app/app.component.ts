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
  ngOnInit() {

  }
}


