import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  allUsers: Array<any> = [];
  users: Array<any> = [];

  searchValue: string = '';
  isShowInactive = false;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.allUsers = this.userService.getUsers();
    this.setupUser();

    this.userService.changeSearch.subscribe(data => {
      if (data) {
        this.searchValue = data.search;
        this.isShowInactive = data.isShowInactive;
        this.setupUser();
      }
    })
  }

  setupUser() {
    this.users = this.showUsers();
  }

  showUsers() {
    return this.allUsers.filter(user => user.isActive === !this.isShowInactive && user.name.toLowerCase().startsWith(this.searchValue.toLowerCase()));
  }

}
