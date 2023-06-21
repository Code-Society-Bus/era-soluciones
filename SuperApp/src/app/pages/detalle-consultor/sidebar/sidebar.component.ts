import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public generalService: GeneralService) { }

  ngOnInit(): void {
  }

}
