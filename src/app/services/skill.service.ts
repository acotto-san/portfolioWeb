import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  public editSkill(obj:Skill): Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}/skills/update`,obj)
  }

  public removeSkill(id:number): Observable <any>{
    return this.http.delete<any>(`${this.apiServerUrl}/skills/${id}`)
  }
}
