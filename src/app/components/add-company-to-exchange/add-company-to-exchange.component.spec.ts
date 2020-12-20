import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyToExchangeComponent } from './add-company-to-exchange.component';

describe('AddCompanyToExchangeComponent', () => {
  let component: AddCompanyToExchangeComponent;
  let fixture: ComponentFixture<AddCompanyToExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanyToExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyToExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
