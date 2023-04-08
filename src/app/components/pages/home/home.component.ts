import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ICinema } from 'src/app/interfaces/ICinema';
import { ObservableService } from 'src/app/services/observable.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastCinema! : ICinema

  constructor(private cinemaObservable: ObservableService, private cdr: ChangeDetectorRef){

  }

  ngOnInit(){
    this.cinemaObservable.getCinemaObservable().subscribe(newCinema => {
      this.lastCinema = newCinema
      this.cdr.detectChanges(); 
    })
    console.log(this.lastCinema);
    
  }

}
