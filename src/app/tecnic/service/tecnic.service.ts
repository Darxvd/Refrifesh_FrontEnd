import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TecnicEntity } from '../model/tecnic-entity';

@Injectable({
  providedIn: 'root'
})
export class TecnicService {

  id = 0;

  private urlgeneral = 'http://localhost:8085/tecnic';

  constructor(private http: HttpClient) { }

  getTecnicActive(): Observable<any>{
    return this.http.get(this.urlgeneral+'/list-active');
  }

  saveTecnic(tecnicData: any): Observable<any> {
    return this.http.post<any>(`${this.urlgeneral}/save`, tecnicData);
  }

  deleteSoftTecnic(id: number){
    return this.http.delete(this.urlgeneral+'/delete-soft/'+id);
  }

  getIdTecnic(){
    return this.http.get<any>(this.urlgeneral+'/find/'+this.id);
  } 

  updateTecnic(tecnicId: number, tecnicData: any): Observable<any> {
    const url = `${this.urlgeneral}/update/${tecnicId}`;
    return this.http.put(url, tecnicData);
  }
  

}
