import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../Models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinup',
  templateUrl: './signinup.component.html',
  styleUrls: ['./signinup.component.css']
})
export class SigninupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  
  private lat: any;
  private lng: any;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  register(user: NgForm) {
    // console.log(user.value);
    user.value.lat = this.lat;
    user.value.lng = this.lng;
    this.userService.registerUser(<User>user.value).subscribe(response => {
      console.log(response);
      if(response){
        //TODO implement logic
        this.router.navigate(['login']);
      }
    },
    (error: any) => console.log(error));
  }
}
