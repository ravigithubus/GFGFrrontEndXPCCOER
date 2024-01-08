import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPage2Component } from './components/pages/landing-page2/landing-page2.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponendComponent } from './header-componend/header-componend.component';
import { TeamLeadsPageComponent } from './components/team-leads-page/team-leads-page.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    LandingPage2Component,
    HeaderComponendComponent,
    TeamLeadsPageComponent,
    EventPageComponent,
    AboutUsComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
