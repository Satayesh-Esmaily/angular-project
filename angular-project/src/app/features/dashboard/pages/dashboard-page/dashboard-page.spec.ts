import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page';

describe('DashboardPageComponent', () => {
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    fixture.detectChanges();
  });

  it('renders stats cards', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Total Tasks');
    expect(text).toContain('Completion');
  });
});
