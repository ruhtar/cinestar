import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  btnText = "Editar";
  private routeSubscription!: Subscription;
  id!: number;
  cinemaUpdate!: ICinema

  constructor(private cinemaService : CinemaService, private route: ActivatedRoute){}

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.getById(this.id)
    });
  }

  getById(id: number){
    this.cinemaService.getById(id).subscribe((data:ICinema)=>{
      this.cinemaUpdate = data;
  })
  }
  
  async editHandler(cinema: ICinema){
    await this.cinemaService.update(cinema, this.id).subscribe();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
