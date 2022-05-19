import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona';
import { environment } from 'src/environments/environment';
import { IExperienciaLaboral } from '../interfaces/experienciaLaboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getExperiencias(): Observable<IExperienciaLaboral[]>{
    return this.http.get<IExperienciaLaboral[]>(`${this.apiServerUrl}/exp-laborales/all`)
  }

  public getExperienciaById(id:number): Observable<IExperienciaLaboral>{
    return this.http.get<IExperienciaLaboral>(`${this.apiServerUrl}/exp-laborales/${id}`)
  }

  public updateExperiencia(expLaboral:IExperienciaLaboral): Observable<IExperienciaLaboral>{
    return this.http.put<IExperienciaLaboral>(`${this.apiServerUrl}/exp-laborales/update`,expLaboral)
  }

  public deleteById(id:number): Observable<HttpResponse<Body>>{
    return this.http.delete<HttpResponse<Body>>(`${this.apiServerUrl}/exp-laborales/${id}`);
  }

}