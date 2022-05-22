import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banner } from '../models/banner';


@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http:HttpClient) { }
  private apiServerUrl = environment.apiBaseUrl;

  public editBanner(obj:Banner): Observable<Banner>{
    return this.http.put<Banner>(`${this.apiServerUrl}/banners/update`,obj)
  }

}
