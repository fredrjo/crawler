import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrllistComponent } from './urllist.component';

describe('UrllistComponent', () => {
  let component: UrllistComponent;
  let fixture: ComponentFixture<UrllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
