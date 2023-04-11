import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private check : Subject<string> = new Subject<string>();

  setCheck(newValue : string){
    //Notifica a todos que observam o Check que o valor dele foi modificado
    this.check.next(newValue);
  }

  getCheck() : Observable<string> {
    return this.check.asObservable();
  }
}
