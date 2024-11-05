import { Component, input, computed, output} from '@angular/core';
import { type User } from '../shared/models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed<string>(() => {
    return 'assets/users/' + this.user().avatar;
  })

  onSelectedUser(): void {
    this.select.emit(this.user().id)
  }

}

/*   @Input({required: true}) avatar: string = '';
  @Input({required: true}) name: string = ''; */

/*   selectedUser = signal<User>(DUMMY_USERS[this.generateRandomIndex()]) ;

  onSelectUser(): void {
    this.selectedUser.set(DUMMY_USERS[this.generateRandomIndex()]);
  }

  generateRandomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  } */
