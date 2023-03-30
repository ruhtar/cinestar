import { Component } from '@angular/core';
import { Cinema } from 'src/app/interfaces/Cinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent {

  cinemas!: Cinema[];

  constructor(private cinemaDataService: CinemaService){
  
  }

  ngOnInit(){
    this.get();
  }

  get(){
    this.cinemaDataService.get().subscribe((data : any)=>{
      this.cinemas = data;
    }, error => {
     console.log(error);
     alert("erro interno do sistema")
    })
  }
}
