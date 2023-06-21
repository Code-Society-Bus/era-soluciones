import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

import { RecetasService } from '../../../services/recetas.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(private _recetasService: RecetasService, public generalService: GeneralService) { }

  mercado:any[] = [];
  marcas:any[] = [];

  ngOnInit(): void {
    this.getTMercado();
    this.getTMarcas();
  }

  // Tabla Mercado
  getTMercado(){
    this._recetasService.getTMercados(this.generalService.generic_data.consultant?.consultant_data.user_name)
      .subscribe(resp =>{
        this.mercado = resp;
      },(err)=>{
        console.log(err);
        this.mercado = [];
      });
  }

  // Tabla Marcas
  getTMarcas(){
    this._recetasService.getMarcas(this.generalService.generic_data.consultant?.consultant_data.user_name)
      .subscribe(resp=>{
        this.marcas = resp;
      },(err)=>{
        console.log(err);
        this.marcas = [];
      });

  }
}
