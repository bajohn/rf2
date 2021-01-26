import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { playersByRoom } from 'src/graphql/queries';
import { v4 as uuidv4 } from 'uuid';
import { PlayersByRoomQuery, PlayersByRoomQueryVariables } from '../API.service';
import { RoomService } from './room.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // playerId
  public readonly id: string;
  // playerName
  public name: string = '';
  constructor(
    private roomService: RoomService
  ) {
    this.id = this.getOrCreatePlayerId(this.roomService.id);

    // const playerName = this.getPlayer(this.room.id, this.id);
    // if (playerName === null) {
    //   this.playerNameDialog(this.room.id);
    // }
  }




  /**
    Get player ID from 
    browser localStorage
  */
  getOrCreatePlayerId(roomId): string {
    const roomKey = 'rfRoomId_' + roomId;
    const curPlayerId = localStorage.getItem(roomKey);
    if (curPlayerId === null) {
      const newPlayerId = uuidv4();
      localStorage.setItem(roomKey, newPlayerId);
      return newPlayerId;
    } else {
      return curPlayerId;
    }
  }

  /**
    Get player metadata
    from backend
  */
  async getPlayer(roomId, playerId) {
    const playerParams: PlayersByRoomQueryVariables = {
      roomId: roomId,
      id: {
        eq: playerId
      }
    };
    const resp = await API.graphql(graphqlOperation(playersByRoom, playerParams)) as { data: PlayersByRoomQuery };
    const allPlayers = resp.data.playersByRoom.items;
    const filteredPlayers = allPlayers.filter(el => {
      return el.id === playerId;
    });

    if (filteredPlayers.length > 1) throw Error('Multiple players with same ID; this should never happen.')

    return filteredPlayers.length === 0 ? null : filteredPlayers[0];
  }

  /**
   * Save player name in this service, if exists.
   */
  playerNameFromResp(data: PlayersByRoomQuery) {
    const items = data.playersByRoom.items;

    if (items.length === 1) {
      this.name = items[0].name;
    } else if (items.length > 1) {
      throw 'Multiple db items for one player ID, this should never happen.';
    }

  }

}
