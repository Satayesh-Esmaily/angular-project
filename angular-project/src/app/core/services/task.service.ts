import { computed, Injectable, signal } from '@angular/core';

import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly tasksState = signal<Task[]>([
    {
      id: 1,
      title: 'Plan architecture',
      description: 'Define modules, routing and shared layer',
      completed: true,
      priority: 'high',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Plan weekly roadmap',
      description: 'Break goals into actionable tasks for this week',
      completed: false,
      priority: 'high',
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      title: 'Build dashboard page',
      description: 'Show KPIs and recent progress',
      completed: false,
      priority: 'medium',
      createdAt: new Date().toISOString()
    }
  ]);

  readonly tasks = this.tasksState.asReadonly();
  readonly totalTasks = computed(() => this.tasksState().length);
  readonly completedTasks = computed(() => this.tasksState().filter((task) => task.completed).length);
  readonly openTasks = computed(() => this.totalTasks() - this.completedTasks());
  readonly completionRate = computed(() => {
    if (this.totalTasks() === 0) {
      return 0;
    }

    return Math.round((this.completedTasks() / this.totalTasks()) * 100);
  });

  addTask(task: Omit<Task, 'id' | 'createdAt' | 'completed'>): void {
    const newTask: Task = {
      ...task,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      completed: false
    };

    this.tasksState.update((tasks) => [newTask, ...tasks]);
  }

  toggleTask(taskId: number): void {
    this.tasksState.update((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  }
}
