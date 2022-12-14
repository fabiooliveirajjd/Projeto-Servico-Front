import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";
@Component({
  selector: "app-cliente-delete",
  templateUrl: "./cliente-delete.component.html",
  styleUrls: ["./cliente-delete.component.css"],
})
export class ClienteDeleteComponent implements OnInit {
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
    private toast: ToastrService,
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
      this.toast.success("Cliente deletado com sucesso", "Delete");
      this.router.navigate(["/clientes"]);
    });
  }
}
