import { DatePipe, registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import ptBr from "@angular/common/locales/pt";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChamadoCreateComponent } from "./components/chamado/chamado-create/chamado-create.component";
import { ChamadoDeleteComponent } from "./components/chamado/chamado-delete/chamado-delete.component";
import { ChamadoListComponent } from "./components/chamado/chamado-list/chamado-list.component";
import { ChamadoUpdateComponent } from "./components/chamado/chamado-update/chamado-update.component";
import { ClienteCreateComponent } from "./components/cliente/cliente-create/cliente-create.component";
import { ClienteDeleteComponent } from "./components/cliente/cliente-delete/cliente-delete.component";
import { ClienteListComponent } from "./components/cliente/cliente-list/cliente-list.component";
import { ClienteUpdateComponent } from "./components/cliente/cliente-update/cliente-update.component";
import { EstoqueCreateComponent } from "./components/estoque/estoque-create/estoque-create.component";
import { EstoqueDeleteComponent } from "./components/estoque/estoque-delete/estoque-delete.component";
import { EstoqueListComponent } from "./components/estoque/estoque-list/estoque-list.component";
import { EstoqueUpdateComponent } from "./components/estoque/estoque-update/estoque-update.component";
import { FaturamentoCreateComponent } from "./components/faturamento/faturamento-create/faturamento-create.component";
import { FaturamentoDeleteComponent } from "./components/faturamento/faturamento-delete/faturamento-delete.component";
import { FaturamentoListComponent } from "./components/faturamento/faturamento-list/faturamento-list.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { TecnicoCreateComponent } from "./components/tecnico/tecnico-create/tecnico-create.component";
import { TecnicoDeleteComponent } from "./components/tecnico/tecnico-delete/tecnico-delete.component";
import { TecnicoListComponent } from "./components/tecnico/tecnico-list/tecnico-list.component";
import { TecnicoUpdateComponent } from "./components/tecnico/tecnico-update/tecnico-update.component";
import { TecnicoViewComponent } from "./components/tecnico/tecnico-view/tecnico-view.component";
import { ClienteViewComponent } from './components/cliente/cliente-view/cliente-view.component';
import { EstoqueViewComponent } from './components/estoque/estoque-view/estoque-view.component';
import { ChamadoViewComponent } from './components/chamado/chamado-view/chamado-view.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TecnicoListComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteListComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteUpdateComponent,
    ChamadoListComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent,
    ChamadoDeleteComponent,
    EstoqueListComponent,
    EstoqueCreateComponent,
    EstoqueUpdateComponent,
    EstoqueDeleteComponent,
    FaturamentoListComponent,
    FaturamentoCreateComponent,
    FaturamentoDeleteComponent,
    TecnicoViewComponent,
    ClienteViewComponent,
    EstoqueViewComponent,
    ChamadoViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DatePipe,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
