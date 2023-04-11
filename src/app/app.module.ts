import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FormComponent } from './components/form/form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CinemasModule } from './components/pages/cinemas/cinemas.module';
import { CardComponent } from './components/pages/cinemas/card/card.component';
import { UpdateComponent } from './components/pages/cinemas/update/update.component';
import { HomeModule } from './components/pages/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'; 
import { NewCinemaComponent } from './components/pages/new-cinema/new-cinema.component';
import { TextComponent } from './components/pages/about/text/text.component';
import { ListComponent } from './components/pages/about/list/list.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewCinemaComponent,
    FormComponent,
    PageNotFoundComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    UpdateComponent,
    TextComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    FormsModule,
    HomeModule,
    CinemasModule,
    MatDialogModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
