import { TecnicoListComponent } from './../../tecnico/tecnico-list/tecnico-list.component';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from  'src/app/models/chamado';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {
  [x: string]: any;
  
  ELEMENT_DATA: Chamado[] = []
  
  displayedColumns: string[] = ['idChamado', 'tecnico', 
  'cliente', 'prioridade', 'status',  'dataAbertura',
  'dataFechamento', 'titulo', 'valor','acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
  
  @ViewChild (MatPaginator) paginator: MatPaginator;


  constructor(
    private service: ChamadoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }
  
  findAll(): void{
    this.service.findAll().subscribe(resposta => {
    this.ELEMENT_DATA = resposta;
    this.dataSource = new MatTableDataSource<Chamado>(resposta);
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
  }

  }


