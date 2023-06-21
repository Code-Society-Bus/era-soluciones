import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../services/general.service';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

  constructor( public generalService:GeneralService) { }

  ngOnInit(): void {
  }

}
