import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummer-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    UserComponent, 
    CommonModule, 
    TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-deep-dive';

  users = DUMMY_USERS;
  selectedUser: any = '';

  onSelectUser(id: string) {
    const user = this.users.find(e => e.id === id)
    this.selectedUser = user?.name; 
  }

}
