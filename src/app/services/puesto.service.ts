import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaPuesto } from '../models/experiencia-puesto';
@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  constructor(private http:HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  public editPuesto(obj:ExperienciaPuesto): Observable<ExperienciaPuesto>{
    return this.http.put<ExperienciaPuesto>(`${this.apiServerUrl}/exp-puestos/update`,obj)
  }

  public removePuesto(id:number): Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/exp-puestos/${id}`)
  }
}
