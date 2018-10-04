import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksetupComponent } from './tasksetup.component';

describe('TasksetupComponent', () => {
  let component: TasksetupComponent;
  let fixture: ComponentFixture<TasksetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
