import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskrunComponent } from './taskrun.component';

describe('TaskrunComponent', () => {
  let component: TaskrunComponent;
  let fixture: ComponentFixture<TaskrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskrunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
