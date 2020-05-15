import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../Models/show';

@Injectable({
  providedIn: 'root'
})

export class ShowService {
  baseUrl = 'http://api.tvmaze.com/';

  constructor( private http: HttpClient ) { }

  listShows() {
    return this.http
      .get<Show[]>(`${this.baseUrl}shows`)
      .pipe(map(shows => (shows) ? shows : []));
  }

  searchAShow() {
    return this.http
      .get<Show>(`${this.baseUrl}search/shows?q=:query`)
      .pipe(map(show => (show) ? show : []));
  }
}
