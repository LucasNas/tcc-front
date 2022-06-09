import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  
  url = 'http://192.168.0.18:8000/data/';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
