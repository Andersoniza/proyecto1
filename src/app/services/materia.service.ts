// src/app/services/materia.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private apiUrl = 'http://localhost:3000/materia'; // URL del backend

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(materia: any): Observable<any> {
    return this.http.post(this.apiUrl, materia);
  }

  update(id: number, materia: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, materia);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
