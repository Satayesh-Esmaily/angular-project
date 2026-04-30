import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
  });

  it('emits value on valid submit', () => {
    let emitted: { title: string; description: string; priority: string } | undefined;
    component.submitTask.subscribe((value) => {
      emitted = value;
    });

    component.title = 'Test title';
    component.description = 'Test desc';
    component.priority = 'high';
    component.onSubmit();

    expect(emitted).toEqual({
      title: 'Test title',
      description: 'Test desc',
      priority: 'high'
    });
  });
});
