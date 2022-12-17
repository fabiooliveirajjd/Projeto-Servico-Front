import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit{
  cliente: Cliente = {
    idCliente: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    dataCriacao: undefined,
  };

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cliente.idCliente = this.route.snapshot.paramMap.get("idCliente");
    this.findById();
  }
  findById(): void {
    this.service.findById(this.cliente.idCliente).subscribe((resposta) => {
      this.cliente = resposta;
    });
  }
  delete(): void {
    this.service.delete(this.cliente.idCliente).subscribe(() => {
      this.router.navigate(["/clientes"]);
    });
  }
}
