import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTradePersonItemComponent } from './service-trade-person-item.component';

describe('ServiceTradePersonItemComponent', () => {
  let component: ServiceTradePersonItemComponent;
  let fixture: ComponentFixture<ServiceTradePersonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTradePersonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTradePersonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
