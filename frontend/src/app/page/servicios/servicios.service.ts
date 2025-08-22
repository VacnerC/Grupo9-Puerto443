import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private apiUrl = 'http://127.0.0.1:8000/api/servicios';

  constructor(private http: HttpClient) { }

  getServicios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addServicio(servicio: any): Observable<any> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No se encontró un token de autenticación.');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.apiUrl, servicio, { headers: headers });
  }

  // Nuevo método para actualizar un servicio
  updateServicio(id: number, servicio: any): Observable<any> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No se encontró un token de autenticación.');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    // La URL para actualizar incluye el ID del servicio
    return this.http.put(`${this.apiUrl}/${id}`, servicio, { headers: headers });
  }

  // Nuevo método para eliminar un servicio
  deleteServicio(id: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No se encontró un token de autenticación.');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    // La URL para eliminar incluye el ID del servicio
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: headers });
  }
}