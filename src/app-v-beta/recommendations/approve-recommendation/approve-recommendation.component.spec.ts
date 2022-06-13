import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRecommendationComponent } from './approve-recommendation.component';

describe('ApproveRecommendationComponent', () => {
  let component: ApproveRecommendationComponent;
  let fixture: ComponentFixture<ApproveRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
