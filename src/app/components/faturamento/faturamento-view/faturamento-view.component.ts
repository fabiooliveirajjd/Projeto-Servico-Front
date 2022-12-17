import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faturamento } from 'src/app/models/faturamento';
import { ChamadoService } from 'src/app/services/chamado.service';

import { Cliente } from './../../../models/cliente';
import { Tecnico } from './../../../models/tecnico';
import { ClienteService } from './../../../services/cliente.service';
import { FaturamentoService } from './../../../services/faturamento.service';
import { TecnicoService } from './../../../services/tecnico.service';

@Component({
  selector: 'app-faturamento-view',
  templateUrl: './faturamento-view.component.html',
  styleUrls: ['./faturamento-view.component.css']
})
export class FaturamentoViewComponent implements OnInit {
  faturamento: Faturamento = {
    valorTotal: "",
    idTecnico: "",
    idCliente: "",
    dataInicioFaturamento: "",
    dataFimFaturamento: "",
    nomeCliente: "",
    nomeTecnico: "",
  };

  clientes: Cliente[] = [];
  tecnicos: Tecnico[] = [];

  constructor(
    private faturamentoService: FaturamentoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.faturamento.idFaturamento = this.route.snapshot.paramMap.get("idFaturamento");
    this.findById();
  
  }

  findById(): void {
    this.faturamentoService
      .findById(this.faturamento.idFaturamento)
      .subscribe((resposta) => {
        this.faturamento = resposta;
        console.log();
      });
    }}