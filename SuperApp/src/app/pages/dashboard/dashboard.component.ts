import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public generalService: GeneralService) {
  }

  ngOnInit(): void {
  }

  updateConsultor(data: any) {
    console.log('data:', data)
  }

}
