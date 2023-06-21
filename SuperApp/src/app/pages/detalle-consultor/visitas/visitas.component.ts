import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {

  constructor(public generalService:GeneralService) { }

  data: any = {};
  visitas: any = {};

  ngOnInit(): void {

    this.getVisitas(); 
    this.getVisitsSumary();
  }

  getVisitsSumary() {
    this.generalService.getVisitsSumary(this.generalService.generic_data.consultant.consultant_user_name)
      .subscribe(resp => {
        this.data = resp;
        console.log('visits-sumary:', resp)
      }, err => {
        console.log(err);
      });
  }

  getVisitas() {
    this.generalService.getVisits(this.generalService.generic_data.consultant.consultant_user_name)
      .subscribe(resp => {
        this.visitas = resp;
        console.log('visitas:', resp)
      }, err => {
        console.log(err);
      });
  }



}
