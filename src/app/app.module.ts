import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddEmployeComponent } from './components/employe/add-employe/add-employe.component';
import { EmployeComponent } from './components/employe/employe.component';
import { ModuleComponent } from './components/module/module.component';
import { ProjetComponent } from './components/projet/projet.component';
import { RoleComponent } from './components/role/role.component';
import { TacheComponent } from './components/tache/tache.component';
import { AddDepartementComponent } from './components/departement/add-departement/add-departement.component';
import { AddModuleComponent } from './components/module/add-module/add-module.component';
import { AddProjetComponent } from './components/projet/add-projet/add-projet.component';
import { AddRoleComponent } from './components/role/add-role/add-role.component';
import { AddTacheComponent } from './components/tache/add-tache/add-tache.component';
import { ListEmployeComponent } from './components/employe/list-employe/list-employe.component';
import { ListDepartementComponent } from './components/departement/list-departement/list-departement.component';
import { MenuComponent } from './header/menu/menu.component';
import { ListProjetComponent } from './components/projet/list-projet/list-projet.component';
import { UpdateEmployeComponent } from './components/employe/update-employe/update-employe.component';
import { DepartementComponent } from './components/departement/departement.component';
import { ListTacheComponent } from './components/tache/list-tache/list-tache.component';
import { ListModuleComponent } from './components/module/list-module/list-module.component';
import { ListRoleComponent } from './components/role/list-role/list-role.component';
import { UpdateDepartementComponent } from './components/departement/update-departement/update-departement.component';
import { UpdateModuleComponent } from './components/module/update-module/update-module.component';
import { UpdateProjetComponent } from './components/projet/update-projet/update-projet.component';
import { UpdateTacheComponent } from './components/tache/update-tache/update-tache.component';
import { UpdateRoleComponent } from './components/role/update-role/update-role.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    DepartementComponent,
    ModuleComponent,
    ProjetComponent,
    RoleComponent,
    TacheComponent,
    AddEmployeComponent,
    AddDepartementComponent,
    AddModuleComponent,
    AddProjetComponent,
    AddRoleComponent,
    AddTacheComponent,
    ListEmployeComponent,
    ListDepartementComponent,
    MenuComponent,
    ListProjetComponent,
    UpdateEmployeComponent,
    ListTacheComponent,
    ListModuleComponent,
    ListRoleComponent,
    UpdateDepartementComponent,
    UpdateModuleComponent,
    UpdateProjetComponent,
    UpdateTacheComponent,
    UpdateRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
