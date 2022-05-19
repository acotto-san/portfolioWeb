import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurriculum } from '../interfaces/curriculum';
import { environment } from 'src/environments/environment';
import { IExperienciaLaboral } from '../interfaces/experienciaLaboral';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getCurriculums(): Observable<ICurriculum[]>{
    return this.http.get<ICurriculum[]>(`${this.apiServerUrl}/curriculums/all`)
  }

  public getCurriculumById(id:number): Observable<ICurriculum>{
    return this.http.get<ICurriculum>(`${this.apiServerUrl}/curriculums/${id}`)
  }

  public updateCurriculum(curriculum:ICurriculum): Observable<ICurriculum>{
    return this.http.put<ICurriculum>(`${this.apiServerUrl}/curriculums/update`,curriculum)
  }

}