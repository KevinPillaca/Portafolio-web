import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../models/contacto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'https://backend-web-cmyd.onrender.com/api/contacto';

  constructor(private http: HttpClient) {}

  enviarContacto(data: Contacto): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

}
