import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { EnterpriseEntity } from '../model/enterprise-entity';
import { EnterpriseDTO } from '../model/enterprise-dto';

@Injectable({
  providedIn: 'root'
})
export class EntepriseService {

  id = 0;
  private urlgeneral = 'http://localhost:8085/enterprise';
  private urlSunat = 'http://localhost:8085/sunat';

  constructor(private http: HttpClient) { }
  
  getEnterpriseActive(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(`${this.urlgeneral}/list-active`, { params });
  }
  getIdEnterprise(){
    return this.http.get<any>(this.urlgeneral+'/find/'+this.id);
  }
  getDescription(ruc: string): Observable<EnterpriseDTO> {
    return this.http.get<EnterpriseDTO>(`${this.urlSunat}/find/${ruc}`);
  }

  searchEnterprisesByRzc(name: string): Observable<EnterpriseEntity[]> {
    return this.http.get<EnterpriseEntity[]>(`${this.urlgeneral}/list-by-name-active/${name}`)
  }
  saveEnterprise(enterpriseData: any): Observable<any>{
    return this.http.post<any>(this.urlgeneral+'/save', enterpriseData);
  }
  updateEnterprise(enterpriseId: number, enterpriseData: any): Observable<any> {
    const url = `${this.urlgeneral}/update/${enterpriseId}`;
    return this.http.put(url, enterpriseData);
  }
  deleteSoftEnterprise(id: number){
    return this.http.delete(this.urlgeneral+'/delete-soft/'+id);
  }
}
