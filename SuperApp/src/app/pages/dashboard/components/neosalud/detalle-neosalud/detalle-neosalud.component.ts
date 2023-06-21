import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-neosalud',
  templateUrl: './detalle-neosalud.component.html',
  styleUrls: ['./detalle-neosalud.component.css']
})
export class DetalleNeosaludComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customizeText(arg: any) {
    return `${arg.valueText} %`;
  }

  architecturesInfo: any[] = [{
    year: 1997,
    mmp: 226
  }, {
    year: 1999,
    mmp: 50
  }, {
    year: 2001,
    mmp: 257
  }, {
    year: 2003,
    mmp: 163
  }, {
    year: 2005,
    mmp: 60
  }, {
    year: 2007,
    mmp: 200
  }];

  types: string[] = ['spline', 'stackedspline', 'fullstackedspline'];

}
