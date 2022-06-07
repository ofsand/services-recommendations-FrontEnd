import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddServiceComponent } from "./services-list/add-service/add-service.component";

const routes: Routes = [
  { path: 'add-service', component: AddServiceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
