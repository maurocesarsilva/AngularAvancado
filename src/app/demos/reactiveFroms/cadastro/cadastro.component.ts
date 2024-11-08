import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // add ao html a prop cadastroForm
    this.cadastroForm = this.fb.group(
      {
        nome: [''],
        cpf: [''],
        email: [''],
        senha: [''],
        senhaConfirmacao: [''],
      }
    );
  }

  adicionarUsuario() {
    let x = this.cadastroForm.value;
  }
}
