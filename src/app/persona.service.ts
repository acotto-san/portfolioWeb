import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './interfaces/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  //getData(endpoint:string):Observable<any>{
  //  return this.http.get(endpoint);
  //}

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/personas/145`)
  }


}
