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

  ngOnInit(){
    this.cinemaForm = new FormGroup({
      id: new FormControl(""),
      ownerName: new FormControl("", [Validators.required]),
      cinemaName: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      cpf: new FormControl("", [Validators.required]),
      description: new FormControl("")
    });
  }

  get ownerNameControlname(){
    return this.cinemaForm.get("ownerNameControlname")!;
  }
  
  get cpfControlname(){
    return this.cinemaForm.get("cpfControlname")!;
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
