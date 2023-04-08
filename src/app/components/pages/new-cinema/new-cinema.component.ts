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
    lastCinema!: ICinema;
    //Injeção de dependência
    constructor(private cinemaService: CinemaService, private observableService: ObservableService){
      this.observableService.getCinemaObservable().subscribe(newCinema => {
        this.lastCinema = newCinema;
      })
    }

  async createHandler(cinema : ICinema){
    await this.cinemaService.addCinema(cinema).subscribe();
    this.setNewCinemaInfo(cinema);
  }

  setNewCinemaInfo(cinema: ICinema){
    this.observableService.setCinemaObservable(cinema)
  }
}
