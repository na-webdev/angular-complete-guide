import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDisplayDetailsComponent } from './assignment-display-details.component';

describe('AssignmentDisplayDetailsComponent', () => {
  let component: AssignmentDisplayDetailsComponent;
  let fixture: ComponentFixture<AssignmentDisplayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDisplayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
