import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RecommendationItemComponent } from './recommendations/recommendation-item/recommendation-item.component';
import { EditRecommendationComponent } from './recommendations/edit-recommendation/edit-recommendation.component';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./home/landing/landing.component";
import { AppFilterServicesComponent } from "./home/filter-services/filter-services.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeServiceTradePersonItemComponent } from './home/home-services-trades-person/home-services-trades-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TradePersonDetailsComponent } from './services-list/trade-person-details/trade-person-details.component';
import { ServiceDetailsComponent } from './services-list/service-details/service-details.component';
import { ApproveRecommendationComponent } from './recommendations/approve-recommendation/approve-recommendation.component';
import { HttpInterceptorJwtAuthService } from './services/interceptors/http-interceptor-jwt-auth.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LandingComponent,
    AppFilterServicesComponent,
    HomeComponent,
    RecommendationsComponent,
    RecommendationItemComponent,
    EditRecommendationComponent,
    CategoriesComponent,
    ServicesListComponent,
    HomeServiceTradePersonItemComponent,
    ServiceDetailsComponent,
    TradePersonDetailsComponent,
    ApproveRecommendationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorJwtAuthService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
