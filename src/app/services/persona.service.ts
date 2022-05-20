import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  public getPersona(id:number): Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/personas/${id}`)
  }
}
