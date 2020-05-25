import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Show } from '../Models/show';
import {IShow} from "../Models/show.model";

@Injectable({
  providedIn: 'root'
})

export class ShowService {
  baseUrl = 'http://api.tvmaze.com/';
  queryUrl: string = 'singlesearch/shows?q=';
  private moviesList: BehaviorSubject<IShow[]> = new BehaviorSubject<IShow[]>([new Show()]);

  constructor( private http: HttpClient ) { }

  get lists() {
    return this.moviesList.asObservable()
  }

  listShows() {
    this.http
      .get<Show[]>(`${this.baseUrl}shows`)
      .subscribe( res => {
        this.moviesList.next(res)
      }
    )
  }

  searchEntries(term) {
    return this.http
      .get<IShow[]>(this.baseUrl + this.queryUrl + term)

      .subscribe( res => {
        let rer = [res];
        console.log('rer searchEntries', rer)
        //??
        this.moviesList.next(res)
      })
  }
}
