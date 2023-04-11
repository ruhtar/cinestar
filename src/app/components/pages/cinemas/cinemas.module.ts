import { NgModule } from '@angular/core';
import { CinemasComponent } from './cinemas.component';
import { CinemaService } from 'src/app/services/cinema.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const cinemaRoutes: Routes = [
  {path: '', children: [
    {
      path: '', component: CinemasComponent
    },
    {
      path: ':id',
      loadChildren: () => import('./card/card.module').then(m => m.CardRoutesModule)
    },
    {
      path: 'update/:id',
      loadChildren: () => import('./update/update.module').then(m => m.UpdateRoutesModule)
    }
  ]}
] 


@NgModule({
  declarations: [
    CinemasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cinemaRoutes)
  ],
  providers: [CinemaService],
  bootstrap: []
})
export class CinemasModule { }
