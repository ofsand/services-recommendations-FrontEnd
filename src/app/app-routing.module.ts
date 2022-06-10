import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { ServicesListComponent } from "./services-list/services-list.component";
import {
  ApproveRecommendationComponent
} from "./recommendations/approve-recommendation/approve-recommendation.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'recommendations/admin', component: ApproveRecommendationComponent },
  { path: 'services/admin', component: ServicesListComponent },
  { path: 'servicess/:serviceTradesPersonId', component: RecommendationsComponent },
  { path: 'trades-persons/:serviceTradesPersonId', component: RecommendationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
