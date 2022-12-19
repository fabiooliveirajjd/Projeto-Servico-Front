import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Estoque } from "src/app/models/estoque";
import { EstoqueService } from "src/app/services/estoque.service";

@Component({
  selector: "app-estoque-update",
  templateUrl: "./estoque-update.component.html",
  styleUrls: ["./estoque-update.component.css"],
})
export class EstoqueUpdateComponent implements OnInit {
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
    private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.estoque.idEstoque = this.route.snapshot.paramMap.get("idEstoque");
    this.findById();
  }

  validaCampos(): boolean {
    return (
      this.descricao.valid &&
      this.quantidade.valid &&
      this.valorCompra.valid &&
      this.tipo.valid
    );
  }

  findById(): void {
    this.service.findById(this.estoque.idEstoque).subscribe((resposta) => {
      this.estoque = resposta;
    });
  }

  update(): void {
    this.service.update(this.estoque).subscribe(() => {
      this.toast.success("Produto atualizado com sucesso", "Update");
      this.router.navigate(["/estoques"]);
    });
  }
}
