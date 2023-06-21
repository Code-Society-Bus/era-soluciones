import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';
import { InretailService } from 'src/app/services/inretail.service';

@Component({
  selector: 'app-inretail',
  templateUrl: './inretail.component.html',
  styleUrls: ['./inretail.component.css']
})
export class InretailComponent implements OnInit {

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

// Fin de Grafica 1
// *********************************************
// Grafica 2
  grossProductData: any[] = [{
    state: 'Illinois',

    year2017: 823,
    year2018: 863,
  }, {
    state: 'Indiana',

    year2017: 332,
    year2018: 332,
  }, {
    state: 'Michigan',

    year2017: 459,
    year2018: 470,
  }, {
    state: 'Ohio',

    year2017: 642,
    year2018: 675,
  }, {
    state: 'Wisconsin',

    year2017: 294,
    year2018: 301,
  }];

  onPointClick(e:any) {
    e.target.select();
  }

  // Fin de Grafica 2
// *********************************************


// Grafica 3
grossProductData1: any[] = [{
  state: 'Illinois',

  year2017: 823,
  year2018: 863,
}, {
  state: 'Indiana',

  year2017: 332,
  year2018: 332,
}, {
  state: 'Michigan',

  year2017: 459,
  year2018: 470,
}, {
  state: 'Ohio',

  year2017: 642,
  year2018: 675,
}, {
  state: 'Wakanda',

  year2017: 200,
  year2018: 600,
},{
  state: 'Mordor',

  year2017: 442,
  year2018: 275,
},{
  state: 'Titan',

  year2017: 142,
  year2018: 875,
},
{
  state: 'Spiderverse',

  year2017: 642,
  year2018: 175,
},{
  state: 'Wisconsin',

  year2017: 294,
  year2018: 301,
}];

onPointClick1(e:any) {
  e.target.select();
}

// Fin de Grafica 2
// *********************************************


  public distritosSoles: any = [];
  public marcas: any = [];
  // Grafica 1
  public tendencia:any = [];

  constructor(
    private _inretailService: InretailService,
    public generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getTendenciaGeneral()
    this.getDistritoSoles();
    this.getMarcas();
  }
// Grafica 1
  getTendenciaGeneral() {
    this._inretailService
      .getTendenciaGeneral(this.generalService.generic_data.consultant?.consultant_data.user_name).toPromise().then(
        resp => {
          this.tendencia = resp;
          console.table(this.tendencia);
        }
      );
  }
// Fin de Grafica 1

  getDistritoSoles() {
    this._inretailService
      .getDistritos(this.generalService.generic_data.consultant?.consultant_data.user_name).toPromise().then(
        resp => {
          this.distritosSoles = resp;
          console.log(this.distritosSoles);
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

