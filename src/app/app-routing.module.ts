import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { TeamLeadsPageComponent } from './components/team-leads-page/team-leads-page.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'home',component:HomeComponent},
  {path:'event-page',component:EventPageComponent},
  {path:'about-page',component:AboutUsComponent},
  {path:'team-leads',component:TeamLeadsPageComponent},
  {path:'contact-page',component:ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
