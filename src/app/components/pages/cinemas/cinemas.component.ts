import { Component, Input } from '@angular/core';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent {

  cinemas!: ICinema[];
  cinema!: ICinema;

  //Injecao de dependencia
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

  delete(id : number){
    try{
      if(confirm("Você tem certeza que desejar remover esse registro?"))
      this.cinemas = this.cinemas.filter((a) => id !== a.id); //Remove a linha da tabela
      this.cinemaDataService.delete(id).subscribe(); 
    } catch (error) {
      console.log(error);
      alert("erro interno do sistema");
    }
  }

/*   getById(id: number){
    try{
    this.cinemaDataService.getById(id).subscribe((data:ICinema)=>{
      this.cinema = data;
      console.log(this.cinema);
      return this.cinema;
    })}catch(error){
      console.log(error);
      alert("erro interno do sistema");
    }
  } */
  
}
