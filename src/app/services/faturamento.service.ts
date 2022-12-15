import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { Faturamento } from '../models/faturamento';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  constructor(private http: HttpClient) { }

  
  findById(idFaturamento: any):Observable<Faturamento> {
    return this.http.get<Faturamento>(`${API_CONFIG.baseUrl}/faturamentos/${idFaturamento}`);
  }


  findAll(): Observable<Faturamento[]> {
    return this.http.get<Faturamento[]>(`${API_CONFIG.baseUrl}/faturamentos`);
  }

  create(faturamento: Faturamento): Observable<Faturamento> {
    return this.http.post<Faturamento>(`${API_CONFIG.baseUrl}/faturamentos`, faturamento);
   }
   
   delete(idFaturamento: any):Observable<Faturamento> {
    return this.http.delete<Faturamento>(`${API_CONFIG.baseUrl}/faturamentos/${idFaturamento}`);
}

}