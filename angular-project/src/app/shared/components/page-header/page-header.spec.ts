import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header';

describe('PageHeaderComponent', () => {
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PageHeaderComponent);
    fixture.componentRef.setInput('title', 'Dashboard');
    fixture.componentRef.setInput('subtitle', 'Project summary');
    fixture.detectChanges();
  });

  it('renders title and subtitle', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Dashboard');
    expect(text).toContain('Project summary');
  });
});
