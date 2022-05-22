import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaLaboral } from '../models/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  constructor(private http:HttpClient) { }
  private apiServerUrl = environment.apiBaseUrl;

  public editExperiencia(obj:ExperienciaLaboral): Observable<ExperienciaLaboral>{
    return this.http.put<ExperienciaLaboral>(`${this.apiServerUrl}/exp-laborales/update`,obj)
  }

  public removeExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/exp-laborales/${id}`)
  }

}
