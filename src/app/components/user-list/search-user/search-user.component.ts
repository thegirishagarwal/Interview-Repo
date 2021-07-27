import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  searchValue: string = ''
  isShowInactive = false;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
  }

  onChange() {
    this.userService.changeSearch.next({
      isShowInactive: this.isShowInactive,
      search: this.searchValue
    })
  }

}
