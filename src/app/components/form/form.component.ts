import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICinema } from 'src/app/interfaces/ICinema';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<ICinema>();

  cinemaForm!: FormGroup


  constructor(){
  }

  ngOnInit():void{
    this.cinemaForm = new FormGroup({

      ownerName: new FormControl("", [Validators.required]),
      cpf: new FormControl("", [Validators.required]),
      cinemaName: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      description : new FormControl()
    });
  }

  get ownerName(){
    return this.cinemaForm.get("ownerName")!;
  }
  
  get cpf(){
    return this.cinemaForm.get("cpf")!;
  }

  get cinemaName(){
    return this.cinemaForm.get("cinemaName")!;
  }  
  
  get street(){
    return this.cinemaForm.get("street")!;
  }
  
  submit(){
    console.log(this.cinemaForm.value);
    this.onSubmit.emit(this.cinemaForm.value);
  }
}
