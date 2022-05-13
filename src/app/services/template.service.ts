import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../models/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  url = 'http://localhost:8000/template/';

  constructor(private http: HttpClient) { }

  getAllTemplates(): Observable<any>{
    
    return this.http.get<any>(this.url);
  }

  deleteTemplate(template: Template): Observable<any>{
    
    return this.http.delete<any>(this.url + template.id + '/');
  }

  createTemplate(template: Template): Observable<any>{
    
    return this.http.post<any>(this.url, JSON.stringify(template));
  }

  editTemplate(template: Template): Observable<any>{
    
    return this.http.put<any>(this.url + template.id + '/', JSON.stringify(template));
  }
}
