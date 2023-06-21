import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  summary: any = {};

  constructor(private generalService: GeneralService) {
    this.generalService.getSummary().toPromise().then(
      (response: any) => {
        this.summary = response;
      }
    );
  }

  ngOnInit(): void {

  }

}
