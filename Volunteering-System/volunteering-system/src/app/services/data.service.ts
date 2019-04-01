import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private map = new BehaviorSubject<any>("default");
  currentMap = this.map.asObservable();
  constructor() { }

  changeMap(map: any) {
    this.map.next(map);
  }
}
