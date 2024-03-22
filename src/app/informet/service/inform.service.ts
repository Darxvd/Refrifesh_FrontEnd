import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformService {

  id = 0;

  private urlgeneral = 'http://localhost:8085/infortec';

  constructor(private http: HttpClient) { }

  getInformActive(): Observable<any>{
    return this.http.get(this.urlgeneral+'/list-active');
  }

  saveInformTecnic(inftecnicData: any): Observable<any> {
    return this.http.post<any>(`${this.urlgeneral}/save`, inftecnicData);
  }  
}