import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table_data: any;
  consultants: any[] = [];

  ordenar: string[] = ['Evo mayor a menor', 'Evo menor a mayor'];
  seleccionado?: string = this.ordenar[0];

  constructor(public generalService: GeneralService,
    private route: ActivatedRoute,
    private router: Router) {
    this.generalService.getResultsLastMonth('desc').toPromise().then(
      (response: any) => {
        this.table_data = response;
        this.generalService.getConsultants().toPromise().then(
          (response: any) => {
            console.log('response:', response)
            this.consultants = response;
            this.joinTableConsultant();
          }
        );
      }
    );
  }

  ngOnInit(): void {
  }

  joinTableConsultant() {
    this.table_data?.data?.forEach((value: any) => {
      value.consultant_data = this.consultants.find(consultant => consultant.full_name === value.consultant);
    })
  }

  setResponse(response: any) {
    this.table_data = response;
    this.joinTableConsultant();
  }

  changeSort() {
    if (this.seleccionado === 'Evo mayor a menor') {
      this.generalService.getResultsLastMonth('desc').toPromise().then(
        (response: any) => {
          this.setResponse(response);
        }
      );
    } else {
      this.generalService.getResultsLastMonth('asc').toPromise().then(
        (response: any) => {
          this.setResponse(response);
        }
      );
    }
  }

  goDashboard(item: any) {
    this.generalService.updateGlobalVars({
      consultant_list: this.table_data?.data,
      consultant: item,
    });
    this.router.navigate([item.consultant_data.user_name, "dashboard"], { relativeTo: this.route });
  }
}


