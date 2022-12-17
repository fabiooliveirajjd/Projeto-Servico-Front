import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Estoque } from "src/app/models/estoque";
import { EstoqueService } from "src/app/services/estoque.service";
@Component({
  selector: 'app-estoque-view',
  templateUrl: './estoque-view.component.html',
  styleUrls: ['./estoque-view.component.css']
})
export class EstoqueViewComponent implements OnInit {
  estoque: Estoque = {
    idEstoque: "",
    descricao: "",
    quantidade: "",
    valorCompra: "",
    tipo: "",
  };

  constructor(
    private service: EstoqueService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.estoque.idEstoque = this.route.snapshot.paramMap.get("idEstoque");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.estoque.idEstoque).subscribe((resposta) => {
      this.estoque = resposta;
    });
  }

}

