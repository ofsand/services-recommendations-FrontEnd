import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTradesPersonComponent } from './add-trades-person.component';

describe('AddTradesPersonComponent', () => {
  let component: AddTradesPersonComponent;
  let fixture: ComponentFixture<AddTradesPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTradesPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTradesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
