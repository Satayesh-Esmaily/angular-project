import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPageComponent } from './tasks-page';

describe('TasksPageComponent', () => {
  let component: TasksPageComponent;
  let fixture: ComponentFixture<TasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('adds task through component method', () => {
    const before = component.tasks().length;

    component.addTask({ title: 'A', description: 'B', priority: 'low' });

    expect(component.tasks().length).toBe(before + 1);
  });
});
