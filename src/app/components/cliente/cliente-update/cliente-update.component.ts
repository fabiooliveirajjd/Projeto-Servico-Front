import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/services/cliente.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-cliente-update",
  templateUrl: "./cliente-update.component.html",
  styleUrls: ["./cliente-update.component.css"],
})
export class ClienteUpdateComponent implements OnInit {
  cliente: Cliente = {
    idCliente: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    dataCriacao: undefined,
  };

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

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

  validaCampos(): boolean {
    return (
      this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
    );
  }

  findById(): void {
    this.service.findById(this.cliente.idCliente).subscribe((resposta) => {
      this.cliente = resposta;
    });
  }
  update(): void {
    this.service.update(this.cliente).subscribe(() => {
      this.toast.success("Cliente atualizado com sucesso", "Update");
      this.router.navigate(["/clientes"]);
    });
  }
}
