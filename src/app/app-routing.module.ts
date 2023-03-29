import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewCinemaComponent } from './components/pages/new-cinema/new-cinema.component';
import { CinemasComponent } from './components/pages/cinemas/cinemas.component';

//Router: Quais paths levam a quais components 
const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "cinemas", component: CinemasComponent},
  {path: "cinema/new", component: NewCinemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
