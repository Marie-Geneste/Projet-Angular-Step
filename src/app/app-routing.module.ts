import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component : HomePageComponent
  },
  {
    path: "services", component : ServicesPageComponent
  },
  {
    path: "mission", component : MissionPageComponent
  },
  {
    path: "contact", component : ContactPageComponent
  },
  {
    path:"**", component : Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
