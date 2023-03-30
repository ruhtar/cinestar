import { Component } from '@angular/core';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-new-cinema',
  templateUrl: './new-cinema.component.html',
  styleUrls: ['./new-cinema.component.css']
})
export class NewCinemaComponent {
    btnText = "Salvar"
    //Injeção de dependência
    constructor(private cinemaService: CinemaService){}

    addCinema(){
      const cinema : ICinema = {
        ownerName: "Teste",
        cpf: 'Teste',
        cinemaName: 'teste',
        street: 'teste'
      }
      this.cinemaService.addCinema(cinema);
    }
}
