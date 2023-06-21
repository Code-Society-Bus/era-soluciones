import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  throwError,
} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public url_base = 'https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/';
  public headers = { headers: { 'Content-Type': 'application/json' } };
  public generic_data: any;
  public idSupervisor: string = 'ROJASAL';

  constructor(
    private http: HttpClient
  ) {
    this.getGenericDataFromLocalStorage();
  }

  getGenericDataFromLocalStorage() {
    this.generic_data = JSON.parse(localStorage.getItem('generic_data') || '{}');
  }

  functionForError(e: any, errorText: string) {
    if (e.status === 404) {
      alert(errorText + ': ' + e.error.message);
      return throwError(e.error.message);
    }
    console.log(e);
    console.log(errorText);
    return throwError(e);
  }

  updateGlobalVars(data?: any) {
    localStorage.setItem('generic_data', JSON.stringify(data));
    this.generic_data = data;
  }

  getProfile(): Observable<any> {
    return this.http
      .get(this.url_base + 'profile/1', this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getProfile')
        })
      );
  }

  getSummary(): Observable<any> {
    return this.http
      .get(this.url_base + 'summary/general/1', this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getSummary')
        })
      );
  }

  getResultsLastMonth(sort: string = ''): Observable<any> {
    return this.http
      .get(this.url_base
        + 'summary/'
        + this.idSupervisor
        + '/last_months_results/?limit=250&page=1'
        + (sort !== '' ? '&sort=' + sort : ''),
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getResultsLastMonth')
        })
      );
  }

  GetSummaryConsultantGraphics(idConsultant: string): Observable<any> {
    return this.http
      .get(this.url_base
      + 'summary/' + this.idSupervisor + '/consultant_graphics/'+ idConsultant,
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getVisits')
        })
      );
  }

  // https://cawjhjx0fj.execute-api.us-east-1.amazonaws.com/summary/ROJASAL/consultant_graphics/ANDRADC


  getConsultants(): Observable<any> {
    return this.http
      .get(this.url_base
      + 'supervisor/' + this.idSupervisor + '/consultants',
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getConsultants')
        })
      );
  }

  getConsultantsDetail(idConsultant: string): Observable<any> {
    return this.http
      .get(this.url_base
      + 'summary/' + this.idSupervisor + '/consultant/' + idConsultant,
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getDetailConsultants')
        })
      );
  }

  getConsultantsDashboard(idConsultant: string): Observable<any> {
    return this.http
      .get(this.url_base
      + 'summary/' + this.idSupervisor + '/consultant/' + idConsultant,
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getDetailConsultants')
        })
      );
  }
  
  getConsultantsMedicalSample(idConsultant: string): Observable<any> {
    return this.http
      .get(this.url_base
      + 'summary/' + this.idSupervisor + '/medical_sample/' + idConsultant+'?limit=200&sort=desc&page=1&specialty=Ginecologo&doctor=YEVERT',
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getConsultantsMedicalSample')
        })
      );
  }

  getMedicalSampleTotalDelivery(idConsultant: string): Observable<any> {
    return this.http
      .get(this.url_base
      + 'summary/' + this.idSupervisor + '/medical_sample_total_delivery/'+ idConsultant,
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getMedicalSampleTotalDelivery')
        })
      );
  }

  getVisitsSumary(idConsultant: string): Observable<any> {
    return this.http
      .get(this.url_base
      + 'summary/' + this.idSupervisor + '/visits_summary/'+ idConsultant,
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getVisitsSumary')
        })
      );
  }



  getVisits(idConsultant: string): Observable<any> {
    let parametros:string = '?limit=200&sort=desc&page=1&specialty=Ginecologo&task=AM&category=AA'
    return this.http
      .get(this.url_base
      + 'summary/' + this.idSupervisor + '/visits/'+ idConsultant+ parametros,
        this.headers)
      .pipe(
        catchError((e) => {
          return this.functionForError(e, 'Error al traer al getVisits')
        })
      );
  }


}



