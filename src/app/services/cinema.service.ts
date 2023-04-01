import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { ICinema } from '../interfaces/ICinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    //Injeçaoo de dependencia
  constructor(private http : HttpClient){}

  getAll(){
     return this.http.get<ICinema[]>(API_PATH + "/cinemas");
  } 

  addCinema(cinema : ICinema){
    return this.http.post<ICinema>(API_PATH + "/new", cinema);
  }

  getByName(cinema: ICinema){
    return this.http.get<ICinema>(API_PATH + "/client-page");
  }

}
