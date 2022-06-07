import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesPersonItemComponent } from './trades-person-item.component';

describe('TradesPersonItemComponent', () => {
  let component: TradesPersonItemComponent;
  let fixture: ComponentFixture<TradesPersonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradesPersonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesPersonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
