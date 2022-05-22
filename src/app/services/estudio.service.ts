import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaEducativa } from '../models/experiencia-educativa';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor(private http:HttpClient) { }
  private apiServerUrl = environment.apiBaseUrl;

  public editEstudio(obj:ExperienciaEducativa): Observable<ExperienciaEducativa>{
    return this.http.put<ExperienciaEducativa>(`${this.apiServerUrl}/exp-educativas/update`,obj)
  }

  public removeEstudio(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/exp-educativas/${id}`)
  }
}
