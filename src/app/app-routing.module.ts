import {FaturamentoViewComponent} from "./components/faturamento/faturamento-view/faturamento-view.component";
import {Faturamento} from "src/app/models/faturamento";
import {ChamadoViewComponent} from "./components/chamado/chamado-view/chamado-view.component";
import {EstoqueViewComponent} from "./components/estoque/estoque-view/estoque-view.component";
import {TecnicoViewComponent} from "./components/tecnico/tecnico-view/tecnico-view.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ChamadoCreateComponent} from "./components/chamado/chamado-create/chamado-create.component";
import {ChamadoListComponent} from "./components/chamado/chamado-list/chamado-list.component";
import {ChamadoUpdateComponent} from "./components/chamado/chamado-update/chamado-update.component";
import {ClienteCreateComponent} from "./components/cliente/cliente-create/cliente-create.component";
import {ClienteDeleteComponent} from "./components/cliente/cliente-delete/cliente-delete.component";
import {ClienteListComponent} from "./components/cliente/cliente-list/cliente-list.component";
import {ClienteUpdateComponent} from "./components/cliente/cliente-update/cliente-update.component";
import {EstoqueCreateComponent} from "./components/estoque/estoque-create/estoque-create.component";
import {EstoqueDeleteComponent} from "./components/estoque/estoque-delete/estoque-delete.component";
import {EstoqueListComponent} from "./components/estoque/estoque-list/estoque-list.component";
import {EstoqueUpdateComponent} from "./components/estoque/estoque-update/estoque-update.component";
import {FaturamentoCreateComponent} from "./components/faturamento/faturamento-create/faturamento-create.component";
import {FaturamentoListComponent} from "./components/faturamento/faturamento-list/faturamento-list.component";
import {HomeComponent} from "./components/home/home.component";
import {NavComponent} from "./components/nav/nav.component";
import {TecnicoCreateComponent} from "./components/tecnico/tecnico-create/tecnico-create.component";
import {TecnicoDeleteComponent} from "./components/tecnico/tecnico-delete/tecnico-delete.component";
import {TecnicoListComponent} from "./components/tecnico/tecnico-list/tecnico-list.component";
import {TecnicoUpdateComponent} from "./components/tecnico/tecnico-update/tecnico-update.component";
import {ClienteViewComponent} from "./components/cliente/cliente-view/cliente-view.component";

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      {path: "home", component: HomeComponent},
      {path: "tecnicos", component: TecnicoListComponent},
      {path: "tecnicos/create", component: TecnicoCreateComponent},
      {path: "tecnicos/view/:idTecnico", component: TecnicoViewComponent},
      {path: "tecnicos/update/:idTecnico", component: TecnicoUpdateComponent},
      {path: "tecnicos/delete/:idTecnico", component: TecnicoDeleteComponent},

      {path: "clientes", component: ClienteListComponent},
      {path: "clientes/create", component: ClienteCreateComponent},
      {path: "clientes/view/:idCliente", component: ClienteViewComponent},
      {path: "clientes/update/:idCliente", component: ClienteUpdateComponent},
      {path: "clientes/delete/:idCliente", component: ClienteDeleteComponent},

      {path: "chamados", component: ChamadoListComponent},
      {path: "chamados/create", component: ChamadoCreateComponent},
      {path: "chamados/view/:idChamado", component: ChamadoViewComponent},
      {path: "chamados/update/:idChamado", component: ChamadoUpdateComponent},

      {path: "estoques", component: EstoqueListComponent},
      {path: "estoques/create", component: EstoqueCreateComponent},
      {path: "estoques/view/:idEstoque", component: EstoqueViewComponent},
      {path: "estoques/update/:idEstoque", component: EstoqueUpdateComponent},
      {path: "estoques/delete/:idEstoque", component: EstoqueDeleteComponent},

      {path: "faturamentos", component: FaturamentoListComponent},
      {path: "faturamentos/create", component: FaturamentoCreateComponent},
      {
        path: "faturamentos/view/:idFaturamento",
        component: FaturamentoViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
