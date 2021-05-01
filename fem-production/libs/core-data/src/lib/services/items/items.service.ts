import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@fem-production/api-interfaces';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  model = 'items';

  constructor(private http: HttpClient) { }

  all(): Observable<Item[]> {
    return this.http.get<Item[]>(this.getURL());
  }

  find(id: string): Observable<Item> {
    return this.http.get<Item>(this.getUrlWithId(id));
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.getURL(), item);
  }

  update(item: Item): Observable<Item> {
    return this.http.put<Item>(this.getUrlWithId(item.id), item);
  }

  delete(item: Item): Observable<Item> {
    return this.http.delete<Item>(this.getUrlWithId(item.id));
  }

  private getURL(): string {
    return API_ENDPOINT + this.model;
  }

  private getUrlWithId(id: string): string {
    return this.getURL() + `/${id}`;
  }
}
