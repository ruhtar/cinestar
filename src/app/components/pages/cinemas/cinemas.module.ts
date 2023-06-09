import { NgModule } from '@angular/core';
import { CinemasComponent } from './cinemas.component';
import { CinemaService } from 'src/app/services/cinema.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';

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
    [SweetAlert2Module],
    RouterModule.forChild(cinemaRoutes)
  ],
  providers: [CinemaService],
  bootstrap: []
})
export class CinemasModule { }
