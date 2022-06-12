import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recommendation} from "../../models/Recommendation.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendationDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRecommendationsByServiceTradesPerson(serviceTradesPersonId: number) {
    return this.httpClient.get<Recommendation[]>(`${environment.API_URL}/services-tradesPerson/${serviceTradesPersonId}/recommendations`);
  }

  addRecommendation(serviceTradesPersonId: number, recommendation: Recommendation) {
    return this.httpClient.post(`${environment.API_URL}/services-tradesPerson/${serviceTradesPersonId}`, recommendation)
  }

  getDisapprovedRecommendations() {
    return this.httpClient.get<Recommendation[]>(`${environment.ADMIN_API_URL}/recommendations/approved=false`);
  }

  approve(recommendationId: number) {
    return this.httpClient.put(`${environment.ADMIN_API_URL}/recommendations/${recommendationId}/approve`, true);
  }

  decline(recommendationId: number) {
    return this.httpClient.put(`${environment.ADMIN_API_URL}/recommendations/${recommendationId}/decline`, false);
  }
}
