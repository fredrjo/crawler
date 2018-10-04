import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportmaillistComponent } from './importmaillist.component';

describe('ImportmaillistComponent', () => {
  let component: ImportmaillistComponent;
  let fixture: ComponentFixture<ImportmaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportmaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportmaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
