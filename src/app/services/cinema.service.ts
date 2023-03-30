import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { ICinema } from '../interfaces/ICinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    //Injeção de dependência
  constructor(private http : HttpClient){}

  getAll(){
     return this.http.get<ICinema[]>(API_PATH + "/cinemas");
  } 

}
