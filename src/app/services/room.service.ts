import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  public readonly id: string;
  constructor(
    private router: Router,
  ) {
    this.id = this.getRoomId();
  }
  /**
    Get room ID from URL
    assuming we're in a room!
  */
  getRoomId() {
    return this.router.url.substring(1);
  }
}
