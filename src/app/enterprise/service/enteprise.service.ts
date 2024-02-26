import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntepriseService {

  private urlgeneral = 'http://localhost:8085/enterprise';

  constructor(private http: HttpClient) { }

  
  getEnterprise(): Observable<any>{
    return this.http.get(this.urlgeneral+'/list-enterprise');
  }

}
