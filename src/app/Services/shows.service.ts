import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { debounceTime } from "rxjs/operators";
import { distinctUntilChanged } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { Show } from '../Models/show';

@Injectable({
  providedIn: 'root'
})

export class ShowService {
  baseUrl = 'http://api.tvmaze.com/';
  queryUrl: string = 'singlesearch/shows?q=';
  moviesList: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor( private http: HttpClient ) { }

  get lists() {
    return this.moviesList.asObservable()
  }

  listShows() {
    this.http
      .get<Show[]>(`${this.baseUrl}shows`)
      // .pipe(map(shows => (shows) ? shows : []))
      .subscribe( res => {
        this.moviesList.next(res)
      }
    )
  }

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
    )
  }

  searchEntries(term) {
    console.log(term)
    return this.http
      .get<Show[]>(this.baseUrl + this.queryUrl + term)
      // .pipe(
      //   // map(res =>  console.log('term', res))
      //   map(shows => (shows) ? shows : [])
      // )
      .subscribe( res => {
        console.log(res)
        let rer = [res];
        console.log(rer)
        this.moviesList.next(rer)
      })

  }

}
