import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GeofenceComponent } from './geofence/geofence.component';
import { SigninupComponent } from './signinup/signinup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GeofenceComponent,
    SigninupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
