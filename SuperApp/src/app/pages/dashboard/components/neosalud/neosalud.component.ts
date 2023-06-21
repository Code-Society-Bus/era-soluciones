import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

import { neosalud } from '../../interfaces/neosalud.interface';
import {
  NeosaludService01Service,
} from '../../services/neosalud-service01.service';

@Component({
  selector: 'app-neosalud',
  templateUrl: './neosalud.component.html',
  styleUrls: ['./neosalud.component.css']
})
export class NeosaludComponent implements OnInit {

  neosalud: neosalud[] = [];

  constructor(
    private renderer2: Renderer2,
    private _consultaNeosalud: NeosaludService01Service,
    public generalService: GeneralService
  ) {
  }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this._consultaNeosalud.ConsultaNeosaludById(this.generalService.generic_data.consultant?.consultant_data.user_name)
      .subscribe(resp => {
        this.neosalud = resp;
        this.neosalud = this.neosalud.splice(0, 8);
        console.table(this.neosalud);


      }, (err) => {
        //  console.log(err);
        this.neosalud = [];

      });
  }

  @ViewChild('as') grafico: ElementRef | undefined;
  @ViewChild('pointer') pointer: ElementRef | undefined;
  @ViewChild('graficos') graficos: ElementRef | undefined;


  detalle() {
    const elementable: any = this.grafico?.nativeElement;
    const pointer: any = this.pointer?.nativeElement;
    const graficos: any = this.graficos?.nativeElement;


    if (document.querySelector('.block')) {
      this.renderer2.removeClass(elementable, 'block');
    }
    else {
      this.renderer2.addClass(elementable, 'block');
    }
    if (document.querySelector('.pointer')) {
      this.renderer2.removeClass(pointer, 'pointer');
    }
    else {
      this.renderer2.addClass(pointer, 'pointer');
    }
    if (document.querySelector('.block2')) {
      this.renderer2.removeClass(graficos, 'block2');
    }
    else {
      this.renderer2.addClass(graficos, 'block2');
    }
  }

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

  onPointClick(e: any) {
    e.target.select();
  }

}
