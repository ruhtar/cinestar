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
  @Input() cinemaUpdate!: ICinema;
  
  cinemaForm!: FormGroup //Representação do formulário.
  formSucess: boolean = false;

  //Injetar o serviço do FormBuilder
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.cinemaForm = this.formBuilder.group({
      ownerName: ["", [Validators.required, Validators.maxLength(70)]],
      cpf: ["", [Validators.required, cpfValidator]],
      cinemaName: ["", [Validators.required, Validators.maxLength(70)]],
      street: ["", [Validators.required, Validators.maxLength(70)]],
      description : ["", Validators.maxLength(150)]
    });
  }


  /* get ownerName(){
    return this.cinemaForm.get("ownerName")!;
  } */
  
/*   get cpf(){
    return this.cinemaForm.get("cpf")!;
  } */
/* 
  get cinemaName(){
    return this.cinemaForm.get("cinemaName")!;
  }   */
  
/*   get street(){
    return this.cinemaForm.get("street")!;
  } */
  
  get description(){
    return this.cinemaForm.get("description")!;
  }
  
  
  submit(){
      if(this.cinemaForm.invalid) return;
      this.onSubmit.emit(this.cinemaForm.value);
      this.formSucess = true;
  }
}
