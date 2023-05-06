import { Component} from '@angular/core';
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
  
  constructor(private route: ActivatedRoute, private cinemaDataService: CinemaService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.getById(this.id);
    });
  }

  getById(id: number){
      this.cinemaDataService.getById(id).subscribe((data:ICinema)=>{
        this.cinema = data;
    })
  } 
}
