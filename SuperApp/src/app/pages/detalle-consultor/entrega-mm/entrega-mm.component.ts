import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general.service';

@Component({
  selector: 'app-entrega-mm',
  templateUrl: './entrega-mm.component.html',
  styleUrls: ['./entrega-mm.component.css']
})
export class EntregaMMComponent implements OnInit {

  data:any= {};
  constructor(public generalService:GeneralService) { }

  ngOnInit(): void {
    this.getMedicalSampleTotalDelivery()
  }
  getMedicalSampleTotalDelivery() {
    this.generalService.getMedicalSampleTotalDelivery(this.generalService.generic_data.consultant.consultant_user_name)
      .subscribe(resp => {
        this.data = resp;
        console.log('resp:', resp)
        console.log(this.data);
      }, err => {
        console.log(err);
      });
  }


}
