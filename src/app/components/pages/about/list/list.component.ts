import { Component } from '@angular/core';
import { CheckService } from 'src/app/services/check.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  list: string[] = ["Angular",
  "Typescript",
  "Reactive Form",
  "HttpClient",
 "Angular Router",
  "Custom Validator",
  "Lazy loading",
  "@Input e @Output",
  "Observable e Subject",
  "NG Image Slider",
  "Sweet Alert",
  ".NET",
  "MySQL"]



  constructor(private check: CheckService){}

  addCheck(value: string){
    this.check.setCheck(value)
  }

}
