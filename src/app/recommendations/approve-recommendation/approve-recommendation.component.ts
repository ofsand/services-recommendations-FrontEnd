import {Component, Injectable, OnInit} from '@angular/core';
import {RecommendationDataService} from "../../services/data/recommendation-data.service";
import {Recommendation} from "../../models/Recommendation.model";
import {User} from "../../models/User.model";


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-approve-recommendation',
  templateUrl: './approve-recommendation.component.html',
  styleUrls: ['./approve-recommendation.component.css']
})
export class ApproveRecommendationComponent implements OnInit {


  recommendations: Recommendation[];
  approvedSuccessfully:boolean = false;

  constructor(
    private recommendationData: RecommendationDataService
  ) { }

  ngOnInit(): void {
    this.getDisapprovedRecommendations();
  }


  getDisapprovedRecommendations(): void{
    this.refreshDisapprovedRecommendations();
  }

  refreshDisapprovedRecommendations() {
    this.recommendationData.getDisapprovedRecommendations().subscribe(
      data => {
        this.recommendations = data;
      }, error => {
        console.log(error);
      }
    );
  }

  approve(recommendationId: number) {
    this.recommendationData.approve(recommendationId).subscribe(
      success => {
        console.log(success);
        this.approvedSuccessfully = true;

        const divApproveAlert = document.getElementById('approve-success') as HTMLElement | null;

        if (divApproveAlert != null) {
          divApproveAlert.classList.remove('d-none');

          setTimeout(() => {
            divApproveAlert.classList.add('d-none');
          }, 2000);
        }


        this.getDisapprovedRecommendations();
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
    this.getDisapprovedRecommendations();
  }

}
