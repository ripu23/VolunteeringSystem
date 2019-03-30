import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siginin',
  templateUrl: './siginin.component.html',
  styleUrls: ['./siginin.component.css']
})
export class SigininComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['home']);
  }
}
