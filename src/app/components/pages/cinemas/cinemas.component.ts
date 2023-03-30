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
  constructor(private cinemaDataService: CinemaService){
  
  }

  ngOnInit(){
    this.get();
  }

  get(){
    this.cinemaDataService.getAll().subscribe((data : any)=>{
      this.cinemas = data;
    }, error => {
     console.log(error);
     alert("erro interno do sistema")
    })
  }
}
