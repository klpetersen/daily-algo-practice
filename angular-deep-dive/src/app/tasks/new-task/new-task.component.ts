import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../shared/models/new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  cancel = output<void>();
  add = output<NewTask>();

  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDate = signal<string>('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    })
  }

}
