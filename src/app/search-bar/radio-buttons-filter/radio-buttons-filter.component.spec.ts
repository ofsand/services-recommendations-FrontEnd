import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonsFilterComponent } from './radio-buttons-filter.component';

describe('RadioButtonsFilterComponent', () => {
  let component: RadioButtonsFilterComponent;
  let fixture: ComponentFixture<RadioButtonsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
