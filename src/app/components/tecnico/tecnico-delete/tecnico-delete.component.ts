import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Tecnico } from "src/app/models/tecnico";
import { TecnicoService } from "src/app/services/tecnico.service";

@Component({
  selector: "app-tecnico-delete",
  templateUrl: "./tecnico-delete.component.html",
  styleUrls: ["./tecnico-delete.component.css"],
})
export class TecnicoDeleteComponent implements OnInit {
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
    private toast: ToastrService,
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
  delete(): void {
    this.service.delete(this.tecnico.idTecnico).subscribe(() => {
      this.toast.success("Técnico deletado com sucesso", "Delete");
      this.router.navigate(["/tecnicos"]);
    });
  }
}
