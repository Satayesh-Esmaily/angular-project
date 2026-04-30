import { TaskService } from '../app/core/services/task.service';

describe('TaskService', () => {
  let service: TaskService;
  beforeEach(() => {
    service = new TaskService();
  });
    // current tasks from the service
  it('should have initial tasks', () => {
    const tasks = service.tasks();
    expect(tasks.length).toBeGreaterThan(0);
  });
  // current number of tasks before adding a new one
  it('should add a new task at the beginning of the list', () => {
    const beforeCount = service.tasks().length;
    service.addTask({
      title: 'Write first test',
      description: 'Practice unit testing',
      priority: 'medium'
    });

    // updat list of tasks
    const afterTasks = service.tasks();
    // check if task count increased by 1
    expect(afterTasks.length).toBe(beforeCount + 1);
     // new task should be added at the top of the list
    expect(afterTasks[0].title).toBe('Write first test');
      // new task should not be completed 
    expect(afterTasks[0].completed).toBe(false);
  });

   // get first task and save its current state
  it('should toggle completed status for a task', () => {
    const firstTask = service.tasks()[0];
    const initialCompleted = firstTask.completed;
    service.toggleTask(firstTask.id);
    const updatedTask = service.tasks().find((task) => task.id === firstTask.id);
    expect(updatedTask).toBeDefined();
    expect(updatedTask?.completed).toBe(!initialCompleted);
  });
});
