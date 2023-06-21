import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DxChartModule,
  DxSelectBoxModule,
} from 'devextreme-angular';

import { InBuildComponent } from './components/in-build/in-build.component';
import {
  DetalleInretailComponent,
} from './components/inretail/detalle-inretail/detalle-inretail.component';
import { InretailComponent } from './components/inretail/inretail.component';
import {
  DetalleNeosaludComponent,
} from './components/neosalud/detalle-neosalud/detalle-neosalud.component';
import { NeosaludComponent } from './components/neosalud/neosalud.component';
import { MarcasComponent } from './components/recetas/marcas/marcas.component';
import {
  MercadosMarcasComponent,
} from './components/recetas/mercados-marcas/mercados-marcas.component';
import {
  MercadosComponent,
} from './components/recetas/mercados/mercados.component';
import {
  NeosaludRecetasComponent,
} from './components/recetas/neosalud-recetas/neosalud-recetas.component';
import {
  PerfilDetalleComponent,
} from './components/recetas/perfil-detalle/perfil-detalle.component';
import { PerfilComponent } from './components/recetas/perfil/perfil.component';
import {
  ResumenComponent,
} from './components/recetas/resumen/resumen.component';
import {
  UseroptionsComponent,
} from './components/useroptions/useroptions.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ResumenComponent,
    InretailComponent,
    NeosaludComponent,
    InBuildComponent,
    UseroptionsComponent,
    ResumenComponent,
    PerfilComponent,
    PerfilDetalleComponent,
    MarcasComponent,
    MercadosComponent,
    MercadosMarcasComponent,
    NeosaludRecetasComponent,
    DetalleNeosaludComponent,
    DetalleInretailComponent,
    DashboardNavComponent
  ],
  imports: [
    RouterModule,
    DxChartModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    DxSelectBoxModule
  ],
  providers: [],
  exports: [
    InretailComponent,
    NeosaludComponent,
    InBuildComponent,
    PerfilComponent,
    UseroptionsComponent,
    ResumenComponent,
    PerfilDetalleComponent,
    MarcasComponent,
    MercadosComponent,
    MercadosMarcasComponent,
    NeosaludRecetasComponent,
    DetalleInretailComponent
  ]
})
export class DashboardModule { }
