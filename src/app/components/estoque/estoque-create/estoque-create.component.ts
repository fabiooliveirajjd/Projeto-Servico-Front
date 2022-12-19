import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Estoque } from "src/app/models/estoque";
import { EstoqueService } from "src/app/services/estoque.service";
@Component({
  selector: "app-estoque-create",
  templateUrl: "./estoque-create.component.html",
  styleUrls: ["./estoque-create.component.css"],
})
export class EstoqueCreateComponent implements OnInit {
  estoque: Estoque = {
    idEstoque: "",
    descricao: "",
    quantidade: "",
    valorCompra: "",
    tipo: "",
  };

  descricao: FormControl = new FormControl(null, Validators.minLength(3));
  quantidade: FormControl = new FormControl(null, Validators.required);
  valorCompra: FormControl = new FormControl(null, Validators.email);
  tipo: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: EstoqueService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  validaCampos(): boolean {
    return (
      this.descricao.valid &&
      this.quantidade.valid &&
      this.valorCompra.valid &&
      this.tipo.valid
    );
  }

  create(): void {
    this.service.create(this.estoque).subscribe(() => {
      this.toast.success("Produto cadastrado com sucesso", "Cadastro");
      this.router.navigate(["/estoques"]);
    });
  }
}
