import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { AddServiceComponent } from "./services-list/add-service/add-service.component";
import { ServiceItemComponent } from "./services-list/service-item/service-item.component";
import { ServicesListComponent } from "./services-list/services-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'services', component: AddServiceComponent},
  {path: 'servicesDetails/:id', component: ServicesListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
