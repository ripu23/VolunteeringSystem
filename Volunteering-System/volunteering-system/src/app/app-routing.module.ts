import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninupComponent } from './signinup/signinup.component';
import { HomeComponent } from './home/home.component';
import { SigininComponent } from './siginin/siginin.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'register', component: SigninupComponent},
  {path: 'login', component: SigininComponent},
  {path: 'home', component: HomeComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
export const routingComponents = [SigninupComponent, HomeComponent]
