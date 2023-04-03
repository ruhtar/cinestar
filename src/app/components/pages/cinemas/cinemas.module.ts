import { NgModule } from '@angular/core';
import { NewCinemaComponent } from '../new-cinema/new-cinema.component';
import { CinemasComponent } from './cinemas.component';
import { CinemaService } from 'src/app/services/cinema.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CinemasComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CinemaService],
  bootstrap: []
})
export class CinemasModule { }
