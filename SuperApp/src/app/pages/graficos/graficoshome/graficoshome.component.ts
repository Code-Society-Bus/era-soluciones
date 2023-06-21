import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-graficoshome',
  templateUrl: './graficoshome.component.html',
  styleUrls: ['./graficoshome.component.css']
})
export class GraficoshomeComponent implements OnInit {

  summary: any = {};

  types: string[] = ['spline', 'stackedspline', 'fullstackedspline'];

  constructor(private generalService: GeneralService) {
    this.generalService.getSummary().toPromise().then(
      (response: any) => {
        console.log('response:', response)
        this.summary = response;
      }
    );
  }

  ngOnInit(): void {
  }

  customizeText(arg: any) {
    return `${arg.valueText} %`;
  }

}
