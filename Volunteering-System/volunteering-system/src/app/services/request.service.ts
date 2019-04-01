import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../Models/user.model';
import { Observable } from 'rxjs';
import { Request } from '../Models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "/api/request";
  
  getVolunteers(request: Request): Observable<User[]> {
    
    let parameters: HttpParams = new HttpParams()
    .set('id', request.id)
    .set('currentAddress', request.currentAddress)
    .set('toAddress', request.toAddress)
    .set('city', request.city)
    .set('zip', request.zip)
    .set('lat', request.lat)
    .set('lat', request.lng);

    return this.http.get<User[]>(this.baseUrl + '/findVolunteers', {
      params: parameters
    });
  }
}
