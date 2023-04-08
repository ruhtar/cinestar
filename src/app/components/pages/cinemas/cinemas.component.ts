import { Component, Input } from '@angular/core';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent {

  cinemas!: ICinema[];
  cinema!: ICinema;
  cinemaStar! : string

  //Injecao de dependencia
  constructor(private cinemaDataService: CinemaService, private cinemaObservable: ObservableService,){}

  ngOnInit(){
    this.getAll();
    this.cinemaObservable.getCinemaObservable().subscribe((cinemaStar:string) => {      
      this.cinemaStar = cinemaStar;
    });
  
  }

  getAll() {
    try {
      this.cinemaDataService.getAll().subscribe(
        cinemas => this.cinemas = cinemas,
      );
    } catch (error) {
      alert("erro interno do sistema");
    }
  }

  delete(id : number){
    try{
      if(confirm("Você tem certeza que desejar remover esse registro?"))
      this.cinemas = this.cinemas.filter((a) => id !== a.id); //Remove a linha da tabela
      this.cinemaDataService.delete(id).subscribe(); 
    } catch (error) {
      alert("erro interno do sistema");
    }
  }

  
}
