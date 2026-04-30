import { Component, computed, inject } from '@angular/core';

import { TaskService } from '../../../../core/services/task.service';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header';

@Component({
  selector: 'app-dashboard-page',
  imports: [PageHeaderComponent],
  templateUrl: './dashboard-page.html'
})
export class DashboardPageComponent {
  private readonly taskService = inject(TaskService);

  readonly totalTasks = this.taskService.totalTasks;
  readonly completedTasks = this.taskService.completedTasks;
  readonly openTasks = this.taskService.openTasks;
  readonly completionRate = this.taskService.completionRate;
  readonly recentTasks = computed(() => this.taskService.tasks().slice(0, 4));
}
