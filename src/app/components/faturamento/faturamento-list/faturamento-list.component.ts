import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Faturamento } from "src/app/models/faturamento";
import { FaturamentoService } from "src/app/services/faturamento.service";
@Component({
  selector: "app-faturamento-list",
  templateUrl: "./faturamento-list.component.html",
  styleUrls: ["./faturamento-list.component.css"],
})
export class FaturamentoListComponent implements OnInit {
  ELEMENT_DATA: Faturamento[] = [];

  displayedColumns: string[] = [
    "idFaturamento",
    "valorTotal",
    "idTecnico",
    "idCliente",
    "dataInicioFaturamento",
    "dataFimFaturamento",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Faturamento>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: FaturamentoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Faturamento>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
  }
}
