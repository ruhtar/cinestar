import { Component } from '@angular/core';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-new-cinema',
  templateUrl: './new-cinema.component.html',
  styleUrls: ['./new-cinema.component.css']
})
export class NewCinemaComponent {
    btnText = "Salvar"
    cinemaUpdate: ICinema={
      ownerName: "",
      cpf: "",
      cinemaName: "",
      street: "",
      description: ""
    };

    //Injeção de dependência
    constructor(private cinemaService: CinemaService){
    }

  async createHandler(cinema : ICinema){
    await this.cinemaService.addCinema(cinema).subscribe();
  }

}
