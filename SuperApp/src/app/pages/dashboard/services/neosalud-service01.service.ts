import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { neosalud } from '../interfaces/neosalud.interface';

@Injectable({
  providedIn: 'root'
})
export class NeosaludService01Service {

  private apiUrl: string = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/consultant/';

  constructor(private http: HttpClient) { }


  ConsultaNeosaludById(id_consultant: any): Observable<neosalud[]> {
    const url = `${this.apiUrl}` + id_consultant + '/neosalud/getytd';
    return this.http.get<neosalud[]>(url);

  }

}
