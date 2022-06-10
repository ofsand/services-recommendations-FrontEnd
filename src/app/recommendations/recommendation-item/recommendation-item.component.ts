import {Component, Input, OnInit} from '@angular/core';
import {Recommendation} from "../../models/Recommendation.model";
import {RecommendationDataService} from "../../services/data/recommendation-data.service";
import {ApproveRecommendationComponent} from "../approve-recommendation/approve-recommendation.component";

@Component({
  selector: 'app-recommendation-item',
  templateUrl: './recommendation-item.component.html',
  styleUrls: ['./recommendation-item.component.css']
})
export class RecommendationItemComponent implements OnInit {

  @Input() recommendation: Recommendation;
  @Input() serviceTradesPersonId: number;


  constructor(
    private recommendationData: RecommendationDataService,
    private approveRecommendationComponent: ApproveRecommendationComponent
  ) {
  }

  ngOnInit(): void {
  }


  approve(recommendationId: number) {
    this.approveRecommendationComponent.approve(recommendationId);
  }

  decline(recommendationId: number) {
    this.approveRecommendationComponent.decline(recommendationId);
  }
}
