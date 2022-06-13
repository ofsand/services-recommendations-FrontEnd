import { Component, Input, OnInit } from '@angular/core';
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
  @Input()serviceTradesPersonId: number;
  counter: number = 0;
  addedSuccessfully: boolean;


  constructor(
    private router: ActivatedRoute,
    private recommendationData: RecommendationDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.recommendation = new Recommendation(this.counter, '', false, 0, {
        email: "",
        username: ""
      } as User);
    console.log(this.serviceTradesPersonId)
    // this.serviceTradesPersonId = this.router.snapshot.params["serviceTradesPersonId"];
    // console.log(this.serviceTradesPersonId)
    this.getRecommendationsByServiceTradesPerson(this.serviceTradesPersonId);

    /*
    if (this.serviceTradesPersonId == undefined && this.authenticationService.isUserLoggedIn()) {
      this.getDisapprovedRecommendations();
    } else {
      this.getRecommendationsByServiceTradesPerson(this.serviceTradesPersonId);
    }
     */
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
        this.addedSuccessfully = true;

        /*
        const divSuccessAlert = document.getElementById('add-success') as HTMLElement | null;

        if (divSuccessAlert != null) {
          divSuccessAlert.classList.remove('d-none')
          setTimeout(() => {
            divSuccessAlert.classList.add('d-none');
          }, 5000);
        }
        */

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
