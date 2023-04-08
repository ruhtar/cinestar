import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICinema } from '../interfaces/ICinema';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  cinemaObservable : Subject<ICinema> = new Subject();
  
  constructor() { }
  setCinemaObservable(newValue : ICinema){
    //Notifica a todos que observam o observable que o valor dele foi modificado
    this.cinemaObservable.next(newValue);
  }

  getCinemaObservable() : Observable<ICinema> {
    return this.cinemaObservable.asObservable();
  }
}
