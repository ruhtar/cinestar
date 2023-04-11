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

  //Injecao de dependencia
  constructor(private cinemaDataService: CinemaService){}

  ngOnInit(){
    this.cinemaDataService.getAll().subscribe((cinemas:ICinema[]) => 
      this.cinemas = cinemas
    );
  }

  delete(id : number){
      if(confirm("Você tem certeza que desejar remover esse registro?")){
        this.cinemaDataService.delete(id).subscribe();
        this.cinemas = this.cinemas.filter(a => id !== a.id); //Remove a linha da tabela
        alert("Cinema removido.")
      }
  }
}
