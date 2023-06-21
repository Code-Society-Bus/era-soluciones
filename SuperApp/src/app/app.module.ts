import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/*Librería DevExtreme*/
import {
  DxButtonModule,
  DxChartModule,
  DxCircularGaugeModule,
  DxDataGridModule,
  DxSelectBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DashboardRoutingModule,
} from './pages/dashboard/dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { BodyComponent } from './pages/detalle-consultor/body/body.component';
import {
  Grafico1Component,
} from './pages/detalle-consultor/grafico1/grafico1.component';
import {
  Grafico2Component,
} from './pages/detalle-consultor/grafico2/grafico2.component';
import {
  Grafico3Component,
} from './pages/detalle-consultor/grafico3/grafico3.component';
import {
  MainDetalleConsultorComponent,
} from './pages/detalle-consultor/main-detalle-consultor/main-detalle-consultor.component';
import {
  SidebarComponent,
} from './pages/detalle-consultor/sidebar/sidebar.component';
import {
  GraficoshomeComponent,
} from './pages/graficos/graficoshome/graficoshome.component';
import { TableComponent } from './pages/graficos/table/table.component';
import { HomeComponent } from './pages/home/home.component';
import {
  NavDashboardComponent,
} from './shared/nav-dashboard/nav-dashboard.component';
import {
  NavPrincipalComponent,
} from './shared/nav-principal/nav-principal.component';
import { VisitasComponent } from './pages/detalle-consultor/visitas/visitas.component';
import { EntregaMMComponent } from './pages/detalle-consultor/entrega-mm/entrega-mm.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavPrincipalComponent,
    NavDashboardComponent,
    TableComponent,
    GraficoshomeComponent,
    MainDetalleConsultorComponent,
    Grafico1Component,
    Grafico2Component,
    Grafico3Component,
    SidebarComponent,
    BodyComponent,
    VisitasComponent,
    EntregaMMComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxTemplateModule,
    DxDataGridModule,
    DxCircularGaugeModule,
    DxChartModule,
    DxSelectBoxModule,
    DashboardModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
