import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { EnterpriseEntity } from '../model/enterprise-entity';

@Injectable({
  providedIn: 'root'
})
export class EntepriseService {

  id = 0;

  private urlgeneral = 'http://localhost:8085/enterprise';

  constructor(private http: HttpClient) { }

  
  getEnterpriseActive(): Observable<any>{
    return this.http.get(this.urlgeneral+'/list-active');
  }

  saveEnterprise(enterpriseData: any): Observable<any>{
    return this.http.post<any>(this.urlgeneral+'/save', enterpriseData);
  }

  deleteSoftEnterprise(id: number){
    return this.http.delete(this.urlgeneral+'/delete-soft/'+id);
  }

  getIdEnterprise(){
    return this.http.get<any>(this.urlgeneral+'/find/'+this.id);
  }

  updateEnterprise(enterpriseId: number, enterpriseData: any): Observable<any> {
    const url = `${this.urlgeneral}/update/${enterpriseId}`;
    return this.http.put(url, enterpriseData);
  }
  
  searchEnterprisesByRzc(name: string): Observable<EnterpriseEntity[]> {
    return this.http.get<EnterpriseEntity[]>(`${this.urlgeneral}/list-by-name-active/${name}`)
  }

}
