import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculum } from '../interfaces/curriculum';
import { environment } from 'src/environments/environment';
import { ExperienciaLaboral } from '../interfaces/experienciaLaboral';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getCurriculums(): Observable<Curriculum>{
    return this.http.get<Curriculum>(`${this.apiServerUrl}/curriculums/all`)
  }

  public updateCurriculum(curriculum:Curriculum): Observable<Curriculum>{
    return this.http.put<Curriculum>(`${this.apiServerUrl}/curriculums/update`,curriculum)
  }

}