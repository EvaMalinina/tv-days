import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Show } from '../Models/show';
import { IShow } from "../Models/show.model";

@Injectable({
  providedIn: 'root'
})

export class ShowService {
  baseUrl = 'http://api.tvmaze.com/';
  queryUrl: string = 'singlesearch/shows?q=';
  private moviesList: BehaviorSubject<IShow[]> = new BehaviorSubject<IShow[]>([new Show()]);
  private sheduledMovieList: BehaviorSubject<IShow[]> = new BehaviorSubject<IShow[]>([new Show()]);

  constructor( private http: HttpClient ) { }

  get lists() {
    return this.moviesList.asObservable()
  }

  get sheduledLists() {
    return this.sheduledMovieList.asObservable()
  }

  listShows() {
    this.http
      .get<Show[]>(`${this.baseUrl}shows`)
      .subscribe( res => {
        this.moviesList.next(res)
      }
    )
  }

  sheduleShows() {
    this.http
      .get<Show[]>(`${this.baseUrl}schedule/full`)
      .subscribe( res => {
          this.sheduledMovieList.next(res)
        }
      )
  }

  searchEntries(term) {
    return this.http
      .get<IShow>(this.baseUrl + this.queryUrl + term)

      .subscribe( res => {
        let rer = [res];
        console.log('rer searchEntries', rer)
        //??
        this.moviesList.next(rer)
      })
  }
}
