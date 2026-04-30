import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskPriority } from '../../../../core/models/task.model';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html'
})
export class TaskFormComponent {
  readonly submitTask = output<{ title: string; description: string; priority: TaskPriority }>();

  title = '';
  description = '';
  priority: TaskPriority = 'medium';

  onSubmit(): void {
    if (!this.title.trim() || !this.description.trim()) {
      return;
    }

    this.submitTask.emit({
      title: this.title.trim(),
      description: this.description.trim(),
      priority: this.priority
    });

    this.title = '';
    this.description = '';
    this.priority = 'medium';
  }
}
