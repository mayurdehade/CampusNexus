import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportApplicationDataComponent } from './export-application-data.component';

describe('ExportApplicationDataComponent', () => {
  let component: ExportApplicationDataComponent;
  let fixture: ComponentFixture<ExportApplicationDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportApplicationDataComponent]
    });
    fixture = TestBed.createComponent(ExportApplicationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
