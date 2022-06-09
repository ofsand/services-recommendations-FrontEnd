import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Recommendation } from "../models/Recommendation.model";
import {RecommendationDataService} from "../services/data/recommendation-data.service";
import {User} from "../models/User.model";
import {AuthenticationService} from "../services/data/authentication.service";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  recommendations: Recommendation[];
  recommendation: Recommendation;
  serviceTradesPersonId: number = 1;
  counter: number = 0;


  constructor(
    private router: ActivatedRoute,
    private recommendationData: RecommendationDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.recommendation = new Recommendation(this.counter, 'dfsd', true, 0, {
        email: "jaouad@gmail.com",
        username: "jaouad"
      } as User);

    this.serviceTradesPersonId = this.router.snapshot.params["serviceTradesPersonId"];
    console.log(this.serviceTradesPersonId)
    // this.getRecommendationsByServiceTradesPerson(this.serviceTradesPersonId);


    if (this.serviceTradesPersonId == undefined && this.authenticationService.isUserLoggedIn()) {
      this.getDisapprovedRecommendations();
    } else {
      this.getRecommendationsByServiceTradesPerson(this.serviceTradesPersonId);
    }
  }

  getRecommendationsByServiceTradesPerson(serviceTradesPersonId: number) {
    this.refreshRecommendations(serviceTradesPersonId);
  }

  refreshRecommendations(serviceTradesPersonId: number) {
    this.recommendationData.getRecommendationsByServiceTradesPerson(serviceTradesPersonId).subscribe(
      data => {
        console.log(data);
        this.recommendations = data;
      }, error => {
        console.log(error);
      }
    );
    ++ this.counter;
  }

  addRecommendation(): void {
    this.recommendationData.addRecommendation(this.serviceTradesPersonId, this.recommendation).subscribe(
      success => {
        console.log(success);
        this.refreshRecommendations(this.serviceTradesPersonId)
      }, error => {
        console.log(error);
      }
    );
  }

  getDisapprovedRecommendations(): void{
    this.recommendationData.getDisapprovedRecommendations().subscribe(
      data => {
        this.recommendations = data;
      }, error => {
        console.log(error);
      }
    );
  }



}
