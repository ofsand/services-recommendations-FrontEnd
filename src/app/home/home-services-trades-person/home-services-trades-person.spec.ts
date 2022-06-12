import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceTradePersonItemComponent } from './home-services-trades-person.component';

describe('ServiceTradePersonItemComponent', () => {
  let component: HomeServiceTradePersonItemComponent;
  let fixture: ComponentFixture<HomeServiceTradePersonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeServiceTradePersonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiceTradePersonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
