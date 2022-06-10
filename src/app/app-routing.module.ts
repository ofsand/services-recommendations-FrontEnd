import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { ServiceDetailsComponent } from "./services-list/service-details/service-details.component";
import { ServicesListComponent } from "./services-list/services-list.component";
import { TradePersonDetailsComponent } from "./services-list/trade-person-details/trade-person-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'services', component: ServicesListComponent},
  {path: 'login', component: LoginComponent},
   {path: 'service-details/:id', component: ServiceDetailsComponent},
   {path: 'tradeperson-details/:id', component: TradePersonDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
