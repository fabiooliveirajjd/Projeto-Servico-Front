import { DatePipe } from "@angular/common";
import { FaturamentoService } from "./../../../services/faturamento.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Faturamento } from "src/app/models/faturamento";
import { ChamadoService } from "src/app/services/chamado.service";

import { Cliente } from "./../../../models/cliente";
import { Tecnico } from "./../../../models/tecnico";
import { ClienteService } from "./../../../services/cliente.service";
import { TecnicoService } from "./../../../services/tecnico.service";
import { Chamado } from "src/app/models/chamado";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-faturamento-create",
  templateUrl: "./faturamento-create.component.html",
  styleUrls: ["./faturamento-create.component.css"],
  providers: [DatePipe],
})
export class FaturamentoCreateComponent implements OnInit {
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
  chamados: Chamado[] = [];

  valorTotal: FormControl = new FormControl(null, Validators.required);
  idTecnico: FormControl = new FormControl(null, Validators.required);
  idCliente: FormControl = new FormControl(null, Validators.required);

  constructor(
    private faturamentoService: FaturamentoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
  }

  create(): void {
    this.faturamentoService.create(this.faturamento).subscribe((resposta) => {
      this.toast.success("Faturamento criado com sucesso", "Cadastro");
      this.router.navigate(["/faturamentos"]);
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
      this.valorTotal.valid && this.idTecnico.valid && this.idCliente.valid
    );
  }
}
