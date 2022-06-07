import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesPersonsComponent } from './trades-persons.component';

describe('TradesPersonsComponent', () => {
  let component: TradesPersonsComponent;
  let fixture: ComponentFixture<TradesPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradesPersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
