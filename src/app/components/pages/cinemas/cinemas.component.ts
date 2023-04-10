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
  cinemaStar! : string

  //Injecao de dependencia
  constructor(private cinemaDataService: CinemaService, 
    private cinemaObservable: ObservableService,){}

  ngOnInit(){
    this.cinemaDataService.getAll().subscribe((cinemas:ICinema[]) => 
      this.cinemas = cinemas,
    );

    this.cinemaObservable.getCinemaObservable().subscribe((data:string) => {      
      this.cinemaStar = data;
    });
  
  }

  delete(id : number){
      if(confirm("Você tem certeza que desejar remover esse registro?")){
        this.cinemas = this.cinemas.filter(a => id !== a.id); //Remove a linha da tabela
        this.cinemaDataService.delete(id);
        alert("Cinema removido.") 
      }
  }
}
