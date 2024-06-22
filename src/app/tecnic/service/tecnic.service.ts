import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getTecnicActive(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(`${this.urlgeneral}/list-active`, { params });
  }
  getIdTecnic(){
    return this.http.get<any>(this.urlgeneral+'/find/'+this.id);
  } 
  searchTecnicByTec(name: string): Observable<TecnicEntity[]> {
    return this.http.get<TecnicEntity[]>(`${this.urlgeneral}/list-by-name-active/${name}`)
  }
  saveTecnic(tecnicData: FormData): Observable<any> {
    return this.http.post<any>(`${this.urlgeneral}/save`, tecnicData);
  }
  deleteSoftTecnic(id: number){
    return this.http.delete(this.urlgeneral+'/delete-soft/'+id);
  }
  updateTecnic(tecnicId: number, tecnicData: TecnicEntity): Observable<any> {
    const url = `${this.urlgeneral}/update/${tecnicId}`;
    return this.http.put<TecnicEntity>(url, tecnicData);
  }
  
}
