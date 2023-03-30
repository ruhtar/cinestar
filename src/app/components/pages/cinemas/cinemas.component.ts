import { Component } from '@angular/core';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent {

  cinemas!: ICinema[];

  //Injeção de dependência
  constructor(private cinemaDataService: CinemaService){}

  ngOnInit(){this.getAll();}

  getAll() {
    try {
      this.cinemaDataService.getAll().subscribe(
        cinemas => this.cinemas = cinemas,
      );
    } catch (error) {
      console.log(error);
      alert("erro interno do sistema");
    }
  }

  
}
