import { ChamadoDeleteComponent } from './components/chamado/chamado-delete/chamado-delete.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { EstoqueListComponent } from './components/estoque/estoque-list/estoque-list.component';

const routes: Routes = [
  { path: '', component: NavComponent, children: [
  { path: 'home', component: HomeComponent }, 
  { path: 'tecnicos', component: TecnicoListComponent },
  { path: 'tecnicos/create', component: TecnicoCreateComponent },
  { path: 'tecnicos/update/:idTecnico', component: TecnicoUpdateComponent },
  { path: 'tecnicos/delete/:idTecnico', component: TecnicoDeleteComponent },

  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/create', component: ClienteCreateComponent },
  { path: 'clientes/update/:idCliente', component: ClienteUpdateComponent },
  { path: 'clientes/delete/:idCliente', component: ClienteDeleteComponent },

  { path: 'chamados', component: ChamadoListComponent },
  { path: 'chamados/create', component: ChamadoCreateComponent },
  { path: 'chamados/update/:idChamado', component: ChamadoUpdateComponent },
  { path: 'chamados/delete/:idChamado', component: ChamadoDeleteComponent },

  { path: 'estoques', component: EstoqueListComponent }


  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
