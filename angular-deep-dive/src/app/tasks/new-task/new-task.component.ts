import { Component, output, signal, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../shared/services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  close = output<void>();
  userId = input.required<string>();

  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDate = signal<string>('');

  constructor(private tasksService: TasksService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {  
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    }, this.userId());
    this.close.emit();
  };
}
