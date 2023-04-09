import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICinema } from 'src/app/interfaces/ICinema';
import { cpfValidator } from 'src/app/validators/cpf-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() btnText!: string; //Entrada. O componente filho recebe os dados. 
  @Output() onSubmit = new EventEmitter<ICinema>(); //Saída. Enviar dados para o componente pai
  @Input() cinemaUpdate?: ICinema;
  
  cinemaForm!: FormGroup
  formSucess: boolean = false;

  constructor(private formBuilder: FormBuilder){
    this.cinemaForm = this.formBuilder.group({
      ownerName: new FormControl("", [Validators.required]),
      cpf: new FormControl("", Validators.compose([Validators.required, cpfValidator])),
      cinemaName: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      description : new FormControl()
    });
  }

  ngOnInit():void{
    this.formSucess = false;
    console.log("carregou");
    
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
      if(this.cinemaForm.invalid) return;
      this.onSubmit.emit(this.cinemaForm.value);
      this.formSucess = true;
  }
}
