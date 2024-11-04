import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummer-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser: any = DUMMY_USERS[randomIndex];
}
