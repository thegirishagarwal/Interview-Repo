import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USERS } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersList = USERS;

  public changeSearch = new BehaviorSubject(null);

  constructor() { }

  getUsers() {
    return this.usersList;
  }
}
