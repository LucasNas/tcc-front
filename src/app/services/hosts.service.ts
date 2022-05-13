import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Host } from '../models/host';

@Injectable({
  providedIn: 'root'
})
export class HostsService {

  url = "http://localhost:8000/host/"

  constructor(private http: HttpClient) { }

  getAllHosts(): Observable<any>{
    
    return this.http.get<any>(this.url);
  }

  deleteHost(host: Host): Observable<any>{
    
    return this.http.delete<any>(this.url + host.id + '/');
  }

  createHost(host: Host): Observable<any>{
    
    return this.http.post<any>(this.url, JSON.stringify(host));
  }

  editHost(host: Host): Observable<any>{
    
    return this.http.put<any>(this.url + host.id + '/', JSON.stringify(host));
  }

}
