import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cinema!: ICinema;
  id!: number;
  private routeSubscription!: Subscription;
  
  constructor(private route: ActivatedRoute, private cinemaDataService: CinemaService) { }

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.getById(this.id);
    });
  }
  getById(id: number){
    try{
      this.cinemaDataService.getById(id).subscribe((data:ICinema)=>{
        this.cinema = data;
        console.log(this.cinema);
        return this.cinema;
    })}catch(error){
      console.log(error);
      alert("erro interno do sistema");
    }
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
