import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../shared/utils/app.constants";
import {Recommendation} from "../../models/Recommendation.model";

@Injectable({
  providedIn: 'root'
})
export class RecommendationDataService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getRecommendationsByServiceTradesPerson(serviceTradesPersonId: number) {
    return this.httpClient.get<Recommendation[]>(`${API_URL}/services-tradesPerson/${serviceTradesPersonId}/recommendations`);
  }

  addRecommendation(serviceTradesPersonId: number, recommendation: Recommendation) {
    return this.httpClient.post(`${API_URL}/services-tradesPerson/${serviceTradesPersonId}`, recommendation)
  }

  getDisapprovedRecommendations() {
    return this.httpClient.get<Recommendation[]>(`${API_URL}/recommendations/approved=false`);
  }

  approve(recommendationId: number) {
    return this.httpClient.put(`${API_URL}/recommendations/${recommendationId}/approve`, true);
  }

  decline(recommendationId: number) {
    return this.httpClient.put(`${API_URL}/recommendations/${recommendationId}/decline`, false);
  }
}
