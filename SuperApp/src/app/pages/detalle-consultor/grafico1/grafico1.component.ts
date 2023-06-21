import { Component } from '@angular/core';
import { GeneralService } from '../../../services/general.service';

@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})
export class Grafico1Component{

  productionData: any[] = [{
    year: 1970,
    country: 'Saudi Arabia',
    oil: 192.2,
  }, {
    year: 1970,
    country: 'USA',
    oil: 533.5,
  }, {
    year: 1970,
    country: 'Iran',
    oil: 192.6,
  }, {
    year: 1970,
    country: 'Mexico',
    oil: 24.2,
  }, {
    year: 1970,
    country: 'Russia',
    oil: 515.9,
  },
  {
    year: 1980,
    country: 'Saudi Arabia',
    oil: 192.2,
  }, {
    year: 1980,
    country: 'USA',
    oil: 533.5,
  }, {
    year: 1980,
    country: 'Iran',
    oil: 192.6,
  }, {
    year: 1980,
    country: 'Mexico',
    oil: 24.2,
  }, {
    year: 1980,
    country: 'Russia',
    oil: 515.9,
  }
  ];

  constructor(public generalService:GeneralService) {
    //this.productionData = service.getProductionData();
  }

  

  customizeSeries(valueFromNameField: number) {
    return valueFromNameField === 1970
      ? { type: 'line', label: { visible: true }, color: '#4E80BD' } : {};
  }





}
