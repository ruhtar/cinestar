import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { ICinema } from '../interfaces/ICinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  constructor(private http : HttpClient){}

  getAll(){
     return this.http.get<ICinema[]>(API_PATH);
  } 

  addCinema(cinema : ICinema){
    return this.http.post<ICinema>(API_PATH + "/register", cinema);
  }

  getById(id: number){
    return this.http.get<ICinema>(`${API_PATH}/${id}`);
  }

  update(cinema : ICinema, id: number){
    return this.http.put<ICinema>(`${API_PATH}/${id}`, cinema)
  }

  delete(id: number){
    return this.http.delete<ICinema>(API_PATH + `/${id}`)
  }
}
