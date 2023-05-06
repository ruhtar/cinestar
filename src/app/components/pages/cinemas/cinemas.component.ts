import { Component } from '@angular/core';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent {

  cinemas!: ICinema[];  

  constructor(private cinemaDataService: CinemaService){}

  ngOnInit(){
    this.cinemaDataService.getAll().subscribe((cinemas:ICinema[]) => 
      this.cinemas = cinemas
    );
  }

  delete(id : number){
      this.cinemaDataService.delete(id).subscribe();
      this.cinemas = this.cinemas.filter(a => id !== a.id);
      Swal.fire('Cinema deletado com sucesso!')
  }
}
