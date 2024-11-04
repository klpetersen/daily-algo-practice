import { Component, input, computed, output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  name = input.required<string>();
  avatar = input.required<string>();
  id = input.required<string>();
  select = output<string>();

  imagePath = computed<string>(() => {
    return 'assets/users/' + this.avatar();
  })

  onSelectedUser(): void {
    this.select.emit(this.id())
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
