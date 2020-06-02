import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';
import { Show } from '../Models/show';
import { IShow } from '../Models/show.model';
import { ISheduledShow } from '../Models/sheduled-show.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ShowService {
  baseUrl = 'http://api.tvmaze.com/';
  queryUrl = 'singlesearch/shows?q=';
  private moviesList: EventEmitter<IShow[]> = new EventEmitter<IShow[]>();
  // private sheduledMovieList: BehaviorSubject<ISheduledShow[]> = new BehaviorSubject<ISheduledShow[]>(null);

  // for seen film
  // private showInfoList: BehaviorSubject<IShow[]> = new BehaviorSubject<IShow[]>(null);
  // for arr of seen films
  // private checkedShowsStorage: EventEmitter<IShow[]> = new EventEmitter<IShow[]>();


  constructor( private http: HttpClient,
               private route: ActivatedRoute,
               private router: Router, ) { }

  get lists() {
    return this.moviesList.asObservable();
  }
  //
  // get sheduledLists() {
  //   return this.sheduledMovieList.asObservable();
  // }

  // get showInfoSeenList() {
  //   return this.showInfoList.asObservable();
  // }

  // get showInfoSeenListArr() {
  //   return this.checkedShowsStorage.asObservable();
  // }

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
          const seenShows = [];
          seenShows.push(res);
          localStorage.setItem('res', JSON.stringify(seenShows));
          // this.showInfoList.next(seenShows);
          // this.checkedShowsStorage.emit(res);

          const showsArr = JSON.parse(localStorage.getItem('shows'));
          if ( showsArr ) {

            // filter does not work
            const newArr = showsArr.filter((show: IShow) => show.id !== showId);
            newArr.push(res);
            console.log('checkedShowsStorage', newArr);
            localStorage.setItem('shows', JSON.stringify(newArr));
            // this.checkedShowsStorage.emit(newArr);
          } else {
            const showsArr = [];
            showsArr.push(res);
            localStorage.setItem('shows', JSON.stringify(showsArr));
          }
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
      });
  }
}
