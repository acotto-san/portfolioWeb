import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona';
import { environment } from 'src/environments/environment';
import { ExperienciaLaboral } from '../interfaces/experienciaLaboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getExperiencias(): Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(`${this.apiServerUrl}/exp-laborales/all`)
  }

}