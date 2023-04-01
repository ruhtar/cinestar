import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { NewCinemaComponent } from './components/pages/new-cinema/new-cinema.component';
import { CinemasComponent } from './components/pages/cinemas/cinemas.component';
import { HomeComponent } from './components/pages/home/home.component';

//Router: Quais paths levam a quais components 
const routes: Routes = [
  {path:"", component: HomeComponent }, // -> movido para home.routing
  {path: "about", component: AboutComponent},
  {path: "cinemas", component: CinemasComponent},
  {path: "client-page", component: NewCinemaComponent}
];

@NgModule({
  //forRoot: só usar no módulo de rotas da aplicação.
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
