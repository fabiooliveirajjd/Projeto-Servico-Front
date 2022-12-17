import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Estoque } from "src/app/models/estoque";
import { EstoqueService } from "src/app/services/estoque.service";

@Component({
  selector: "app-estoque-list",
  templateUrl: "./estoque-list.component.html",
  styleUrls: ["./estoque-list.component.css"],
})
export class EstoqueListComponent implements OnInit {
  ELEMENT_DATA: Estoque[] = [];

  displayedColumns: string[] = [
    "idEstoque",
    "descricao",
    "quantidade",
    "valorCompra",
    "dataCompra",
    "tipo",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Estoque>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: EstoqueService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Estoque>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
