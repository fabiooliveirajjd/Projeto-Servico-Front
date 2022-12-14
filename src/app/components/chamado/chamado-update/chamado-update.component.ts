import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ChamadoService } from "src/app/services/chamado.service";

import { Chamado } from "./../../../models/chamado";
import { Cliente } from "./../../../models/cliente";
import { Tecnico } from "./../../../models/tecnico";
import { ClienteService } from "./../../../services/cliente.service";
import { TecnicoService } from "./../../../services/tecnico.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-chamado-update",
  templateUrl: "./chamado-update.component.html",
  styleUrls: ["./chamado-update.component.css"],
})
export class ChamadoUpdateComponent implements OnInit {
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
    private toast: ToastrService,
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

  update(): void {
    this.chamadoService.update(this.chamado).subscribe((resposta) => {
      this.toast.success("Chamado atualizado com sucesso", "Update");
      this.router.navigate(["/chamados"]);
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

  validaCampos(): boolean {
    return (
      this.tecnico.valid &&
      this.cliente.valid &&
      this.prioridade.valid &&
      this.status.valid &&
      this.valor.valid &&
      this.titulo.valid &&
      this.observacoes.valid
    );
  }

  retornaStatus(status: any): string {
    if (status == "ABERTO") {
      return "ABERTO";
    } else if (status == "ANDAMENTO") {
      return "ANDAMENTO";
    } else {
      return "ENCERRADO";
    }
  }

  retornaPrioridade(prioridade: any): string {
    if (prioridade == "BAIXA") {
      return "BAIXA";
    } else if (prioridade == "MEDIA") {
      return "MEDIA";
    } else {
      return "ALTA";
    }
  }
}
