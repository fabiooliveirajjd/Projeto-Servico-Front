import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChamadoService } from 'src/app/services/chamado.service';

import { Chamado } from './../../../models/chamado';
import { Cliente } from './../../../models/cliente';
import { Tecnico } from './../../../models/tecnico';
import { ClienteService } from './../../../services/cliente.service';
import { TecnicoService } from './../../../services/tecnico.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {


  chamado: Chamado = {
    prioridade: '',
    status: '',
    observacoes: '',
    titulo: '',
    tecnico: '',
    cliente: '',
    valor: '',
    nomeCliente: '',
    nomeTecnico: '',
  }

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []

  prioridade: FormControl = new FormControl(null, Validators.required);
  status: FormControl = new FormControl(null, Validators.required);
  observacoes: FormControl = new FormControl(null, Validators.required);
  titulo: FormControl = new FormControl(null, Validators.required);
  tecnico: FormControl = new FormControl(null, Validators.required);
  cliente: FormControl = new FormControl(null, Validators.required);
  valor: FormControl = new FormControl(null, Validators.required);

  constructor(
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
  }

  create(): void{
    this.chamadoService.create(this.chamado).subscribe(resposta => {
      this.router.navigate(['/chamados']);
      console.log(); 
    })
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;
      
    })
  }

  findAllTecnicos(): void {
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;
    })
  }

  validaCampos(): boolean {
    return this.tecnico.valid && this.cliente.valid
     && this.prioridade.valid && this.status.valid 
     && this.valor.valid && this.titulo.valid
     && this.observacoes.valid
    }

}
