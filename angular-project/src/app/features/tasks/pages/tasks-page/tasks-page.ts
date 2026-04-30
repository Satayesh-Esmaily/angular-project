import { Component, inject } from '@angular/core';

import { TaskPriority } from '../../../../core/models/task.model';
import { TaskService } from '../../../../core/services/task.service';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header';
import { TaskFormComponent } from '../../components/task-form/task-form';

@Component({
  selector: 'app-tasks-page',
  imports: [PageHeaderComponent, TaskFormComponent],
  templateUrl: './tasks-page.html'
})
export class TasksPageComponent {
  private readonly taskService = inject(TaskService);

  readonly tasks = this.taskService.tasks;

  addTask(task: { title: string; description: string; priority: TaskPriority }): void {
    this.taskService.addTask(task);
  }

  toggleTask(taskId: number): void {
    this.taskService.toggleTask(taskId);
  }
}
