import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAlertComponent } from './job-alert.component';

describe('JobAlertComponent', () => {
  let component: JobAlertComponent;
  let fixture: ComponentFixture<JobAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobAlertComponent]
    });
    fixture = TestBed.createComponent(JobAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
