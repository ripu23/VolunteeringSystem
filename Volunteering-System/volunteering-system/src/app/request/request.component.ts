import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestService } from '../services/request.service';
import { Request } from '../Models/request.model';
import { DataService } from '../services/data.service';


declare var H: any;

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private requestService: RequestService, private data: DataService) { }

  private map: any;
  

  ngOnInit() {
    this.data.currentMap.subscribe(map => {
      this.map = map;
    })
  }

  private baseUrl: string = "/api/request/"
  findVolunteers(requestForm: NgForm) {
    console.log(requestForm.value);
    let currentMarker = new H.map.Marker({lat: 33.40, lng: -111.920778});
    this.map.addObject(currentMarker);
    this.requestService.getVolunteers(<Request> requestForm.value).subscribe(response => {
      console.log(response);
    })
  }
}
