import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  public cinemaObservable : Subject<string> = new Subject<string>();

  setCinemaObservable(newValue : string){
    //Notifica a todos que observam o observable que o valor dele foi modificado
    this.cinemaObservable.next(newValue);
  }

  getCinemaObservable() : Observable<string> {
    return this.cinemaObservable.asObservable();
  }
}
