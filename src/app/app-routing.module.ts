import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { NewCinemaComponent } from './components/pages/new-cinema/new-cinema.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Router: Quais paths levam a quais components 
const routes: Routes = [
  {path:"", component: HomeComponent },
  {path: "about", component: AboutComponent},
  {path: "cinemas", loadChildren: () => import('../app/components/pages/cinemas/cinemas.module').then(m => m.CinemasModule)},
  {path: "register", component: NewCinemaComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  //forRoot: so usar no módulo de rotas da aplicação.
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
