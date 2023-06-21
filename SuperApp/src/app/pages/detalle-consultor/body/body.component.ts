import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  data: any = {};

  constructor(public generalService: GeneralService) {
  }

  ngOnInit(): void {
    this.getDetalleConsultor();
  }

  getDetalleConsultor() {
    this.generalService.getConsultantsDetail(this.generalService.generic_data.consultant.consultant_user_name)
      .subscribe(resp => {
        this.data = resp;
        console.log('resp:', resp)
      }, err => {
        console.log(err);
      });
  }

  customizeText(arg: any) {
    return `${arg.valueText} %`;
  }

  architecturesInfo: any[] = [{
    year: 1997,
    smp: 263,
    mmp: 226,
    cnstl: 10
  }, {
    year: 1999,
    smp: 169,
    mmp: 256,
    cnstl: 66
  }, {
    year: 2001,
    smp: 57,
    mmp: 257,
    cnstl: 143
  }, {
    year: 2003,
    smp: 0,
    mmp: 163,
    cnstl: 127
  }, {
    year: 2005,
    smp: 0,
    mmp: 103,
    cnstl: 36
  }, {
    year: 2007,
    smp: 0,
    mmp: 91,
    cnstl: 3
  }];

  types: string[] = ['spline', 'stackedspline', 'fullstackedspline'];


}
