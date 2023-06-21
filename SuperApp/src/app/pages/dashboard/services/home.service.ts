import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl:string = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/';

  constructor( private http: HttpClient ) { 

  }
  ResultLastMont():Observable<any[]>{
    let headers = 'summary/ROJASAL/last_months_results/ANFOSLX?limit=10&page=1&sort=desc'

    const url= `${this.apiUrl}+${headers}`;
   return this.http.get<any[]>(url);

  }

}
