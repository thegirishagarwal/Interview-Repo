import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
]


@NgModule({
  declarations: [UserListComponent, SearchUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class UserListModule { }
