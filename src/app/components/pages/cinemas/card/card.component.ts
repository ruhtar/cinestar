import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICinema } from 'src/app/interfaces/ICinema';
import { ObservableService } from 'src/app/services/observable.service';
import { DialogComponent } from './dialog/dialog.component';
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
  dialogRef! : MatDialog
  
  constructor(private route: ActivatedRoute, private cinemaDataService: CinemaService, 
    private observableService: ObservableService, public dialog : MatDialog) { }

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.getById(this.id);
    });
    this.openDialog();
  }
  getById(id: number){
      this.cinemaDataService.getById(id).subscribe((data:ICinema)=>{
        this.cinema = data;
    })
  }

  addStars(cinemaName : string){
    this.observableService.setCinemaObservable(cinemaName)
  }

  openDialog () : void{
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog fechado"); 
    });
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
