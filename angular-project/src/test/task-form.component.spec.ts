import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFormComponent } from '../app/features/tasks/components/task-form/task-form';
import { TaskPriority } from '../app/core/models/task.model';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let emitted: any;

  // quickly fill the form fields
  function fillForm(title: string, desc: string, priority: TaskPriority) {
    component.title = title;
    component.description = desc;
    component.priority = priority;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFormComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    // outpot event
    component.submitTask.subscribe((value) => {
      emitted = value;
    });
    fixture.detectChanges();
  });

  beforeEach(() => {
    // reset emitted value
    emitted = undefined;
  });
  
  it('does not emit when title is empty', () => {
    // fill form with empty stat
    fillForm('   ', 'Valid description', 'medium');
    // try to submit it
    component.onSubmit();
    // nothing to be emitted
    expect(emitted).toBeUndefined();
  });

  it('emits task when form is valid', () => {
    // fill form with valid data
    fillForm('Write tests', 'Practice component testing', 'high');
    // submit it
    component.onSubmit();
    // correct data to be emitted  
    expect(emitted).toEqual({
      title: 'Write tests',
      description: 'Practice component testing',
      priority: 'high'
    });
  });

  it('resets form after submit', () => {
    // fill form with some values
    fillForm('Task title', 'Task description', 'low');
    // Submit the form
    component.onSubmit();
    // if form reset after submission 
    expect(component.title).toBe('');
    expect(component.description).toBe('');
    expect(component.priority).toBe('medium');
  });
});