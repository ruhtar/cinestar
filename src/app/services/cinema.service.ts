import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    
  constructor(private http:HttpClient){
  }

  get(){
     return this.http.get("https://localhost:7062/cinemas");
  }

}
