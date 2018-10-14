import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindataComponent } from './logindata.component';

describe('LogindataComponent', () => {
  let component: LogindataComponent;
  let fixture: ComponentFixture<LogindataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
