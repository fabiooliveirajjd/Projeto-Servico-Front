import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Tecnico } from "src/app/models/tecnico";
import { TecnicoService } from "src/app/services/tecnico.service";

@Component({
  selector: "app-tecnico-view",
  templateUrl: "./tecnico-view.component.html",
  styleUrls: ["./tecnico-view.component.css"],
})
export class TecnicoViewComponent implements OnInit{
  tecnico: Tecnico = {
    idTecnico: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    dataCriacao: undefined,
  };

  constructor(
    private service: TecnicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tecnico.idTecnico = this.route.snapshot.paramMap.get("idTecnico");
    this.findById();
  }

  findById(): void {
    this.service.findById(this.tecnico.idTecnico).subscribe((resposta) => {
      this.tecnico = resposta;
    });
  }
}
