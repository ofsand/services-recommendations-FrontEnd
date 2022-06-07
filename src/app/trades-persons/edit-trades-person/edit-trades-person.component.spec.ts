import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTradesPersonComponent } from './edit-trades-person.component';

describe('EditTradesPersonComponent', () => {
  let component: EditTradesPersonComponent;
  let fixture: ComponentFixture<EditTradesPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTradesPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTradesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
