import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  public editProyecto(obj:Proyecto): Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiServerUrl}/proyectos/update`,obj)
  }

  public removeProyecto(id:number): Observable <any>{
    return this.http.delete<any>(`${this.apiServerUrl}/proyectos/${id}`)
  }
}
