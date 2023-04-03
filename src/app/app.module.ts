import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Imports
import {HttpClientModule} from "@angular/common/http"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewCinemaComponent } from './components/pages/new-cinema/new-cinema.component';
import { FormComponent } from './components/form/form.component';
import { CinemasComponent } from './components/pages/cinemas/cinemas.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CinemasModule } from './components/pages/cinemas/cinemas.module';
import { CardComponent } from './components/pages/cinemas/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewCinemaComponent,
    FormComponent,
    PageNotFoundComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    FormsModule,
    CinemasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
