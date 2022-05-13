import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'http://localhost:8000/item/';

  constructor(private http: HttpClient) { }

  getAllItens(): Observable<any>{
    
    return this.http.get<any>(this.url);
  }

  deleteItem(item: Item): Observable<any>{
    
    return this.http.delete<any>(this.url + item.id + '/');
  }

  createItem(item: Item): Observable<any>{
    
    return this.http.post<any>(this.url, JSON.stringify(item));
  }

  editItem(item: Item): Observable<any>{
    
    return this.http.put<any>(this.url + item.id + '/', JSON.stringify(item));
  }
}
