import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:8080/register"
  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post(this.baseUrl, user);
  }
}
