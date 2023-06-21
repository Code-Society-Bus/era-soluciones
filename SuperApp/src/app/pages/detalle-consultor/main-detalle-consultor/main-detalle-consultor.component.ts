import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-main-detalle-consultor',
  templateUrl: './main-detalle-consultor.component.html',
  styleUrls: ['./main-detalle-consultor.component.css']
})
export class MainDetalleConsultorComponent implements OnInit {

  @ViewChild("bodyComponent", { static: false }) BodyComponent: BodyComponent;

  constructor(public generalService: GeneralService) {
    this.BodyComponent = new BodyComponent(this.generalService);
    console.log('this.generalService.globaVar:', this.generalService.generic_data)
  }

  ngOnInit(): void {
  }

  updateConsultor(data: any) {
    this.BodyComponent.getDetalleConsultor();
  }

}
