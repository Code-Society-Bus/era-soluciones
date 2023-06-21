import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  throwError,
} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class InretailService {

  public url = ''
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  getDistritos(id_consultant: any): Observable<any> {
    return this._http
      .get(this.url + 'consultant/' + id_consultant + '/inretail/getdistritossoles', { headers: this.headers })
      .pipe(
        catchError((e) => {
          if (e.status === 404) {
            return throwError(e.status.error);
          }
          console.log(e);
          console.log('Error al traer Ditritos');
          return throwError(e);
        })
      );
  }

  getMarcas(id_consultant: any): Observable<any> {
    return this._http
      .get(this.url + 'consultant/' + id_consultant + '/inretail/getmarcassoles', { headers: this.headers })
      .pipe(
        catchError((e) => {
          if (e.status === 404) {
            return throwError(e.status.error);
          }
          console.log(e);
          console.log('Error al traer las Marcas')
          return throwError(e);
        })
      );
  }

  getMercados(id_consultant: any): Observable<any> {
    return this._http
      .get(this.url + 'consultant/' + id_consultant + '/ddd/getresumenmercados', { headers: this.headers })
      .pipe(
        catchError((e) => {
          if (e.status === 404) {
            return throwError(e.status.error);
          }
          console.log(e);
          console.log('Error al traer los Mercados');
          return throwError(e);
        })
      );
  }


  getTendenciaGeneral(id_consultant: any): Observable<any> {
    return this._http
      .get(this.url + 'consultant/' + id_consultant + '/inretail/gettendenciageneral', { headers: this.headers })
      .pipe(
        catchError((e) => {
          if (e.status === 404) {
            return throwError(e.status.error);
          }
          console.log(e);
          console.log('Error al traer los Tendencia General');
          return throwError(e);
        })
      );
  }
}
