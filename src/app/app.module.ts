import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerPresentationComponent } from './banner-presentation/banner-presentation.component';
import { ServicesSectionsComponent } from './services-sections/services-sections.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page404/page404.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AlertModule, CarouselModule } from '@coreui/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    BannerPresentationComponent,
    ServicesSectionsComponent,
    FooterComponent,
    Page404Component,
    ServicesPageComponent,
    MissionPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
