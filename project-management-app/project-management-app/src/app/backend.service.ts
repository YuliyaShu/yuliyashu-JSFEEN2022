import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url: string = 'https://management-app-team7.herokuapp.com';
  constructor(private http: HttpClient) { }

  public search(term: string) {
    return this.http.get(this.url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      }
    });
  }
}
