import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { TradesPersonsComponent } from './trades-persons/trades-persons.component';
import { EditTradesPersonComponent } from './trades-persons/edit-trades-person/edit-trades-person.component';
import { AddTradesPersonComponent } from './trades-persons/add-trades-person/add-trades-person.component';
import { TradesPersonItemComponent } from './trades-persons/trades-person-item/trades-person-item.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RecommendationItemComponent } from './recommendations/recommendation-item/recommendation-item.component';
import { AddRecommendationComponent } from './recommendations/add-recommendation/add-recommendation.component';
import { EditRecommendationComponent } from './recommendations/edit-recommendation/edit-recommendation.component';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { AddServiceComponent } from './services-list/add-service/add-service.component';
import { EditServiceComponent } from './services-list/edit-service/edit-service.component';
import { ServiceItemComponent } from './services-list/service-item/service-item.component';
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LandingComponent} from "./landing/landing.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {DropDownFilterComponent} from "./search-bar/drop-down-filter/drop-down-filter.component";
import {RadioButtonsFilterComponent} from "./search-bar/radio-buttons-filter/radio-buttons-filter.component";
import {SearchComponent} from "./search-bar/search/search.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceTradePersonItemComponent } from './home/service-trade-person-item/service-trade-person-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SearchBarComponent,
    DropDownFilterComponent,
    RadioButtonsFilterComponent,
    SearchComponent,
    HomeComponent,
    TradesPersonsComponent,
    EditTradesPersonComponent,
    AddTradesPersonComponent,
    TradesPersonItemComponent,
    RecommendationsComponent,
    RecommendationItemComponent,
    AddRecommendationComponent,
    EditRecommendationComponent,
    CategoriesComponent,
    ServicesListComponent,
    AddServiceComponent,
    EditServiceComponent,
    ServiceItemComponent,
    ServiceTradePersonItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
