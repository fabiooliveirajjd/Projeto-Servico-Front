import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Chamado } from './../../../models/chamado';

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {
  
  ELEMENT_DATA: Chamado[] = [
    {
      idChamado: 1,
      prioridade: 'ALTA',
      status: 'ABERTO',
      observacoes: 'Chamado Iniciado',
      titulo: 'Chamado 1',
      tecnico: '1',
      cliente: '4',
      nomeCliente: 'fabio',
      nomeTecnico: 'Alan',
      valor: '200',
      dataAbertura: '29/11/2022',
      dataFechamento: '29/22/2022'
    }
  ]
  
  displayedColumns: string[] = ['idChamado', 'nomeTecnico', 'nomeCliente', 'prioridade', 'status',  'dataAbertura',
  'dataFechamento', 'titulo', 'valor','acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
  
  @ViewChild (MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
