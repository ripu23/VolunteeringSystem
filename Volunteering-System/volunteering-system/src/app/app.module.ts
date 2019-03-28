import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GeofenceComponent } from './geofence/geofence.component';
import { SignupinComponent } from './signupin/signupin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GeofenceComponent,
    SignupinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
