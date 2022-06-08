import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { FiltersComponent } from "./filters/filters.component";
import { HomeComponent } from "./home/home.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'filters', component: FiltersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
