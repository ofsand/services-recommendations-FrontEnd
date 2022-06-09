import {Component, Input, OnInit} from '@angular/core';
import {Recommendation} from "../../models/Recommendation.model";
import {RecommendationDataService} from "../../services/data/recommendation-data.service";

@Component({
  selector: 'app-recommendation-item',
  templateUrl: './recommendation-item.component.html',
  styleUrls: ['./recommendation-item.component.css']
})
export class RecommendationItemComponent implements OnInit {

  @Input() recommendation: Recommendation;
  @Input() serviceTradesPersonId: number;
  // @Output() someEvent = new EventEmitter<string>();
  starRating: number;

  constructor(
    private recommendationData: RecommendationDataService
  ) {
  }

  ngOnInit(): void {
  }

  approve(recommendationId: number) {
    this.recommendationData.approve(recommendationId).subscribe(
      success => {
          console.log(success);
      }, error => {
          console.log(error);
      }
    );
  }

  decline(recommendationId: number) {
    this.recommendationData.decline(recommendationId).subscribe(
      success => {
        console.log(success);
      }, error => {
        console.log(error);
      }
    );
  }
}
