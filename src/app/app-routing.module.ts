import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  { path: '', component: NavComponent, children: [
  { path: 'home', component: HomeComponent }, 
  { path: 'tecnicos', component: TecnicoListComponent },
  { path: 'tecnicos/create', component: TecnicoCreateComponent },
  { path: 'tecnicos/update/:idTecnico', component: TecnicoUpdateComponent },
  { path: 'tecnicos/delete/:idTecnico', component: TecnicoDeleteComponent },

  { path: 'clientes', component: ClienteListComponent }

  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
