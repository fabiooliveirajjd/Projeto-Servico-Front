import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    idCliente: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    dataCriacao: undefined
  }

  nome: FormControl =  new FormControl(null, Validators.minLength(3));
  cpf: FormControl =       new FormControl(null, Validators.required);
  email: FormControl =        new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: ClienteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid
     && this.email.valid && this.senha.valid
  }

  create(): void {
    this.service.create(this.cliente).subscribe(() =>{
    this.router.navigate(['/clientes'])  
    })
    }
  }
 