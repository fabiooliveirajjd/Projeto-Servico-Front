import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { Estoque } from '../models/estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  
  findById(idEstoque: any):Observable<Estoque> {
    return this.http.get<Estoque>(`${API_CONFIG.baseUrl}/estoques/${idEstoque}`);
  }


  findAll(): Observable<Estoque[]> {
    return this.http.get<Estoque[]>(`${API_CONFIG.baseUrl}/estoques`);
  }

  create(estoque: Estoque): Observable<Estoque> {
    return this.http.post<Estoque>(`${API_CONFIG.baseUrl}/estoques`, estoque);
   }

   update(estoque: Estoque): Observable<Estoque> {
    return this.http.put<Estoque>(`${API_CONFIG.baseUrl}/estoques/${estoque.idEstoque}`, estoque);
   }

   delete(idEstoque: any):Observable<Estoque> {
    return this.http.delete<Estoque>(`${API_CONFIG.baseUrl}/estoques/${idEstoque}`);
}

}
     