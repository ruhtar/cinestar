import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() btnText!: string;

  cinemaForm!: FormGroup


  constructor(){
  }

  ngOnInit():void{
    this.cinemaForm = new FormGroup({
      id: new FormControl(""),
      ownerNameControlName: new FormControl("", [Validators.required]),
      cpfControlName: new FormControl("", [Validators.required]),
      cinemaNameControlName: new FormControl("", [Validators.required]),
      streetControlName: new FormControl("", [Validators.required]),
      descriptionControlName : new FormControl()
    });
  }

  get ownerNameControlName(){
    return this.cinemaForm.get("ownerNameControlName")!;
  }
  
  get cpfControlName(){
    return this.cinemaForm.get("cpfControlName")!;
  }

  get cinemaNameControlName(){
    return this.cinemaForm.get("cinemaNameControlName")!;
  }  
  
  get streetControlName(){
    return this.cinemaForm.get("streetControlName")!;
  }
  
  submit(){
    console.log("enviou");
  }
}
