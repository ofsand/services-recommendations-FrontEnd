import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { ServiceDetailsComponent } from "./services-list/service-details/service-details.component";
import { ServicesListComponent } from "./services-list/services-list.component";
import { TradePersonDetailsComponent } from "./services-list/trade-person-details/trade-person-details.component";
import {RouteGuardService} from "./services/data/route-guard.service";
import {
  ApproveRecommendationComponent
} from "./recommendations/approve-recommendation/approve-recommendation.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";


 

   

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categories/admin', component: CategoriesComponent, canActivate: [RouteGuardService] },
  { path: 'recommendations/admin', component: ApproveRecommendationComponent, canActivate: [RouteGuardService]},
  { path: 'services/admin', component: ServicesListComponent, canActivate: [RouteGuardService]},
  { path: 'services/:serviceTradesPersonId', component: RecommendationsComponent},
  { path: 'trades-persons/:serviceTradesPersonId', component: RecommendationsComponent },
  {path: 'services', component: ServicesListComponent},
  {path: 'service-details/:id', component: ServiceDetailsComponent},
   {path: 'tradeperson-details/:id', component: TradePersonDetailsComponent},
   {path: 'recommendations', component: RecommendationsComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
