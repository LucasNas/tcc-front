import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  url = 'http://localhost:8000/template/';

  constructor(private http: HttpClient) { }

  getAllTemplates(): Observable<any>{
    
    return this.http.get<any>(this.url);
  }
}
