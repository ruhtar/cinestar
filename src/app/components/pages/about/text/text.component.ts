import { Component } from '@angular/core';
import { CheckService } from 'src/app/services/check.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

  lastItem! : string;

  constructor(private check: CheckService){}

  ngOnInit(){
    this.check.getCheck().subscribe((data:string) => {    
      this.lastItem = data;
    });
  }
}
