import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private check : Subject<string> = new Subject<string>();

  setCheck(newValue : string){
    this.check.next(newValue);
  }

  getCheck() : Observable<string> {
    return this.check.asObservable();
  }
}
