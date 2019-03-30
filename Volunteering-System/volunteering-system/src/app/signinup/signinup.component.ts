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
  
  ngOnInit() {
  }

  register(user: NgForm) {
    // console.log(user.value);
    this.userService.registerUser(<User>user.value).subscribe(response => {
      console.log(response);
      if(response){
        this.router.navigate(['login']);
      }
    },
    (error: any) => console.log(error));
  }
}
