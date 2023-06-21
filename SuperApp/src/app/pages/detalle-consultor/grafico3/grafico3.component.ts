import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico3',
  templateUrl: './grafico3.component.html',
  styleUrls: ['./grafico3.component.css']
})
export class Grafico3Component{

  populationData: any[] = [{
    country: 'China',
    y014: 23386695,
    y1564: 117091410,
    y65: 17177411,
  }, {
    country: 'India',
    y014: 373419115,
    y1564: 882520945,
    y65: 76063757,
  }, {
    country: 'United States',
    y014: 60554755,
    y1564: 213172625,
    y65: 54835293,
  }, {
    country: 'Indonesia',
    y014: 65715705,
    y1564: 177014815,
    y65: 18053690,
  }, {
    country: 'Brazil',
    y014: 45278034,
    y1564: 144391494,
    y65: 17190842,
  }, {
    country: 'Russia',
    y014: 24465156,
    y1564: 96123777,
    y65: 20412243,
  }];
  
  types: string[] = ['area', 'stackedarea', 'fullstackedarea'];

  constructor() {
  }
}
