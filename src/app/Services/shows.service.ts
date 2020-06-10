import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../Models/show';
import { IShow } from '../Models/show.model';
import { ISheduledShow } from '../Models/sheduled-show.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ShowService {
  baseUrl = 'https://api.tvmaze.com/';
  queryUrl = 'singlesearch/shows?q=';
  private moviesList: EventEmitter<IShow[]> = new EventEmitter<IShow[]>();

  constructor( private http: HttpClient,
               private route: ActivatedRoute,
               private router: Router, ) { }

  get lists() {
    return this.moviesList.asObservable();
  }

  listShows() {
    this.http
      .get<Show[]>(`${this.baseUrl}shows`)
      .subscribe( res => {
        this.moviesList.emit(res);
      }
    );
  }

  showInfo(showId) {
    this.http
      .get<IShow[]>(`${this.baseUrl}shows/${showId}`)
      .subscribe( res => {

          localStorage.setItem('res', JSON.stringify(res));

          const showsArr = JSON.parse(localStorage.getItem('shows'));
          if ( showsArr ) {

            const newArr = showsArr.filter((show: IShow) => show.id !== showId);
            newArr.push(res);
            localStorage.setItem('shows', JSON.stringify(newArr));
          } else {
            const showsAr = [];
            showsAr.push(res);
            localStorage.setItem('shows', JSON.stringify(showsAr));
          }
          this.router.navigate(['info']);
        },
        err => {
          console.log(err);
        },
        () => {
          this.router.navigate(['info']);
        }
      );
  }

  sheduleShows() {
    return this.http
      .get<ISheduledShow[]>(`${this.baseUrl}schedule/full`);
  }

  searchEntries(term) {
    return this.http
      .get<IShow>(this.baseUrl + this.queryUrl + term)
      .subscribe( res => {
        const resInArr = [res];
        this.moviesList.emit(resInArr);
      },
      (err) => {
        alert(`
        No show found, sorry...
        ${err.message}`);
      },
      () => {
        this.router.navigate(['']);
      });
  }
}
