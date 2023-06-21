import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';
import { InretailService } from 'src/app/services/inretail.service';

@Component({
  selector: 'app-detalle-inretail',
  templateUrl: './detalle-inretail.component.html',
  styleUrls: ['./detalle-inretail.component.css']
})
export class DetalleInretailComponent implements OnInit {

  ordenar1: string[] = ['Evo mayor a menor', 'Evo menor a mayor'];
  seleccionado: string[] = [];

  // Grafica 1

  types: string[] = ['line', 'stackedline', 'fullstackedline'];

  energySources: any[] = [
    { value: 'hydro', name: 'Hydro-electric' },

  ];

  countriesInfo: any[] = [{
    country: 'USA',
    hydro: 59.8
  }, {
    country: 'China',
    hydro: 74.2
  }, {
    country: 'Russia',
    hydro: 40
  }, {
    country: 'Japan',
    hydro: 22.6
  }, {
    country: 'India',
    hydro: 19
  }, {
    country: 'Germany',
    hydro: 6.1
  }];

  // *********************************************
  // Grafica 2
  grossProductData: any[] = [{
    state: 'Illinois',

    year2017: 150,
    year2018: 263,
  }, {
    state: 'Indiana',

    year2017: 932,
    year2018: 732,
  }, {
    state: 'Michigan',

    year2017: 59,
    year2018: 170,
  }, {
    state: 'Ohio',

    year2017: 20,
    year2018: 10,
  }, {
    state: 'Wisconsin',

    year2017: 194,
    year2018: 51,
  }];

  onPointClick(e: any) {
    e.target.select();
  }

  // Fin de Grafica 2
  // *********************************************

  public distritos: any = [];
  public mercados: any = [];
  public marcas:any = [];

  constructor(
    private _inretailService: InretailService,
    public generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getMarcas();
    this.getDistritos();
    this.getMercados();
  }

  getDistritos(): void {
    this._inretailService
      .getDistritos(this.generalService.generic_data.consultant?.consultant_data.user_name).subscribe(
        resp => {
          this.distritos = resp;
          console.log(this.distritos);
        }
      );
  }

  getMercados(): void {
    this._inretailService
      .getMercados(this.generalService.generic_data.consultant?.consultant_data.user_name).subscribe(
        resp => {
          this.mercados = resp;
          console.log(this.mercados);
        }
      );
  }
  getMarcas(): void {
    this._inretailService
      .getMarcas(this.generalService.generic_data.consultant?.consultant_data.user_name).subscribe(
        resp => {
          this.marcas = resp;
          console.log(this.marcas);
        }
      );
  }

}
