import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamado } from 'src/app/models/chamado';
import { Faturamento } from 'src/app/models/faturamento';
import { ChamadoService } from 'src/app/services/chamado.service';

import { Cliente } from './../../../models/cliente';
import { Tecnico } from './../../../models/tecnico';
import { ClienteService } from './../../../services/cliente.service';
import { FaturamentoService } from './../../../services/faturamento.service';
import { TecnicoService } from './../../../services/tecnico.service';

@Component({
  selector: 'app-faturamento-delete',
  templateUrl: './faturamento-delete.component.html',
  styleUrls: ['./faturamento-delete.component.css']
})
export class FaturamentoDeleteComponent implements OnInit {

  faturamento: Faturamento = {
    valorTotal: '',
    idTecnico: '',
    idCliente: '',
    nomeCliente: '',
    nomeTecnico: '',
    dataInicioFaturamento: '',
    dataFimFaturamento: ''
    
  }

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []
  chamados: Chamado[] = []

  constructor(
    private faturamentoService: FaturamentoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private chamadoService: ChamadoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.faturamento.idFaturamento =  this.route.snapshot.paramMap.get('idFaturamento');
    this.findById();
    this.findAllClientes();
    this.findAllTecnicos();
  }

  findById(): void {
    this.faturamentoService.findById(this.faturamento.idFaturamento).subscribe(resposta => {
      this.faturamento = resposta;
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

  delete(): void{
    this.faturamentoService.delete(this.faturamento.idFaturamento).subscribe(resposta => {
      this.router.navigate(['/faturamentos']);
      console.log(); 
    })
  }
}

