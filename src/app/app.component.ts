import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dados: number[] = [1,2,3,4,5]
  userData = {
    email: "teste@teste",
    username: "teste",
    password: 1234
  }
  title = 'viasoft-front';
}
