import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-signinup',
  templateUrl: './signinup.component.html',
  styleUrls: ['./signinup.component.css']
})
export class SigninupComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  ngOnInit() {
  }

  register(user: NgForm) {
    // console.log(user.value);
    this.userService.registerUser(<User>user.value).subscribe(response => {
      console.log(response);
    });
  }
}
