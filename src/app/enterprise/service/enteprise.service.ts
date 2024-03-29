import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
  

}
