import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GeofenceComponent } from './geofence/geofence.component';
import { SigninupComponent } from './signinup/signinup.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SigininComponent } from './siginin/siginin.component';
import { InfoComponent } from './info/info.component';
import { RequestComponent } from './request/request.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GeofenceComponent,
    SigninupComponent,
    HomeComponent,
    SigininComponent,
    InfoComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
