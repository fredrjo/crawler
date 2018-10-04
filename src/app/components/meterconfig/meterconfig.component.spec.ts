import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterconfigComponent } from './meterconfig.component';

describe('MeterconfigComponent', () => {
  let component: MeterconfigComponent;
  let fixture: ComponentFixture<MeterconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
