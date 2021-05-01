import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})

export class WidgetsService {
  model = 'widgets';

  constructor(private http: HttpClient) { }

  all(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.getURL());
  }

  find(id: string): Observable<Widget> {
    return this.http.get<Widget>(this.getUrlWithId(id));
  }

  create(widget: Widget): Observable<Widget> {
    return this.http.post<Widget>(this.getURL(), widget);
  }

  update(widget: Widget): Observable<Widget> {
    return this.http.put<Widget>(this.getUrlWithId(widget.id), widget);
  }

  delete(widget: Widget): Observable<Widget> {
    return this.http.delete<Widget>(this.getUrlWithId(widget.id));
  }

  private getURL(): string {
    return API_ENDPOINT + this.model;
  }

  private getUrlWithId(id: string): string {
    return this.getURL() + `/${id}`;
  }
}
