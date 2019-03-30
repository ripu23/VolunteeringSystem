import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninupComponent } from './signinup/signinup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: 'register', component: SigninupComponent},
  {path: 'home', component: HomeComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
export const routingComponents = [SigninupComponent, HomeComponent]
