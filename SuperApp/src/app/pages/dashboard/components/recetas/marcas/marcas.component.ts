import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

import { RecetasService } from '../../../services/recetas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  constructor(private _RecetasService: RecetasService, public generalService: GeneralService) { }

  marcas:any[] = [];

  ngOnInit(): void {
    this.GetMarcas();
  }

  GetMarcas(){
    this._RecetasService.getMarcas(this.generalService.generic_data.consultant?.consultant_data.user_name)
      .subscribe(resp =>{
        this.marcas = resp;
        console.log(this.marcas);
      },(err)=>{
        console.log(err);
        this.marcas = [];
      });
  }

}
