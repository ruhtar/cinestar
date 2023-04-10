import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICinema } from 'src/app/interfaces/ICinema';
import { ObservableService } from 'src/app/services/observable.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  images = [
    { image: 'https://via.placeholder.com/600x400', thumbImage: 'https://via.placeholder.com/150x100' },
    { image: 'https://via.placeholder.com/600x400', thumbImage: 'https://via.placeholder.com/150x100' },
    { image: 'https://via.placeholder.com/600x400', thumbImage: 'https://via.placeholder.com/150x100' },
    { image: 'https://via.placeholder.com/600x400', thumbImage: 'https://via.placeholder.com/150x100' }
  ];
}
