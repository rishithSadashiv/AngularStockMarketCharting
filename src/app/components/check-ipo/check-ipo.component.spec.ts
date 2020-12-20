import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIpoComponent } from './check-ipo.component';

describe('CheckIpoComponent', () => {
  let component: CheckIpoComponent;
  let fixture: ComponentFixture<CheckIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
