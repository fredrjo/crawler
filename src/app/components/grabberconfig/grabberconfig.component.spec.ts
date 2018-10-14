import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabberconfigComponent } from './grabberconfig.component';

describe('GrabberconfigComponent', () => {
  let component: GrabberconfigComponent;
  let fixture: ComponentFixture<GrabberconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabberconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabberconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
