import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradePersonDetailsComponent } from './trade-person-details.component';

describe('TradePersonDetailsComponent', () => {
  let component: TradePersonDetailsComponent;
  let fixture: ComponentFixture<TradePersonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradePersonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradePersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
