import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-nav-principal',
  templateUrl: './nav-principal.component.html',
  styleUrls: ['./nav-principal.component.css']
})
export class NavPrincipalComponent implements OnInit {

  user: any = {};

  constructor(private generalService: GeneralService) {
    this.getUserInfo();
  }

  ngOnInit(): void { }

  getUserInfo() {
    this.generalService.getProfile()
      .toPromise().then(
        (response: any) => {
          // console.log('response:', response)
          this.user = response;
        }
      );
  }
}
