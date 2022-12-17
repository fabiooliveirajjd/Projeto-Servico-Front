import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ChamadoService } from "src/app/services/chamado.service";

import { Chamado } from "./../../../models/chamado";
import { Cliente } from "./../../../models/cliente";
import { Tecnico } from "./../../../models/tecnico";
import { ClienteService } from "./../../../services/cliente.service";
import { TecnicoService } from "./../../../services/tecnico.service";

@Component({
  selector: "app-chamado-delete",
  templateUrl: "./chamado-delete.component.html",
  styleUrls: ["./chamado-delete.component.css"],
})
export class ChamadoDeleteComponent implements OnInit {
  chamado: Chamado = {
    prioridade: "",
    status: "",
    observacoes: "",
    titulo: "",
    idTecnico: "",
    idCliente: "",
    valor: "",
    nomeTecnico: "",
    nomeCliente: "",
  };

  clientes: Cliente[] = [];
  tecnicos: Tecnico[] = [];

  constructor(
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.chamado.idChamado = this.route.snapshot.paramMap.get("idChamado");
    this.findById();
    this.findAllClientes();
    this.findAllTecnicos();
  }

  findById(): void {
    this.chamadoService
      .findById(this.chamado.idChamado)
      .subscribe((resposta) => {
        this.chamado = resposta;
        console.log();
      });
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe((resposta) => {
      this.clientes = resposta;
    });
  }

  findAllTecnicos(): void {
    this.tecnicoService.findAll().subscribe((resposta) => {
      this.tecnicos = resposta;
    });
  }
  delete(): void {
    this.chamadoService.delete(this.chamado.idChamado).subscribe((resposta) => {
      this.router.navigate(["/chamados"]);
      console.log();
    });
  }
}
