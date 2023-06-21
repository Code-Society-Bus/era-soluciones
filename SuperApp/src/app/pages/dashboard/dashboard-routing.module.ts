import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { InBuildComponent } from './components/in-build/in-build.component';
import {
  DetalleInretailComponent,
} from './components/inretail/detalle-inretail/detalle-inretail.component';
import { InretailComponent } from './components/inretail/inretail.component';
import { NeosaludComponent } from './components/neosalud/neosalud.component';
import {
  ResumenComponent,
} from './components/recetas/resumen/resumen.component';

const routes: Routes = [
  { path: '', component: ResumenComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: 'recipes', component: ResumenComponent },
  { path: 'ddd', component: NeosaludComponent },
  { path: 'neosalud', component: NeosaludComponent },
  { path: 'inretail', component: InretailComponent },
  { path: 'inretail/detail', component: DetalleInretailComponent },
  { path: 'inbuild', component: InBuildComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
