import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curriculum } from '../models/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public editCurriculum(obj:Curriculum): Observable<Curriculum>{
    return this.http.put<Curriculum>(`${this.apiServerUrl}/curriculums/update`,obj)
  }
}
