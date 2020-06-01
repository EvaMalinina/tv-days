import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ShowService } from '../../Services/shows.service';
// import { Show } from '../../Models/show';
import { IShow } from '../../Models/show.model';
import { Subscription } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  providers: [ HttpClient ]
  // encapsulation: ViewEncapsulation.None,
})

export class ShowsComponent implements OnInit, OnDestroy {

  shows: IShow[];
  comedies: IShow[];
  dramas: IShow[];
  thrillers: IShow[];
  actions: IShow[];
  bestRatesShows: IShow[];
  checkedShows: IShow[];
  isSeen: boolean;
  subscription: Subscription;
  subscription2: Subscription;
  marker = false;

  constructor( private showService: ShowService, ) { }

  ngOnInit(): void {
    this.subscription = this.showService.lists.subscribe(data => {
      this.shows = data;

      if ( this.marker === false ) {
        this.marker = true;
        this.listBestRatesShows();
        this.listComedies();
        this.listDramas();
        this.listThrillers();
        this.listActions();
      }
    });

    this.listShows();

    this.checkedShows = JSON.parse(localStorage.getItem('shows'));
    // this.subscription2 = this.showService.showInfoSeenListArr.subscribe(data => {
    //   console.log('data from listarr', data);
    //   // localstorage get data
    //   this.checkedShows = data;
    // });
  }

  listShows() {
    this.showService.listShows();
  }

  listBestRatesShows() {
    this.bestRatesShows = this.shows.filter(function(el) {
      return +el.rating.average > 8.5;
    });

  }

  listComedies() {
    const comedies = this.shows.filter((el) => {
      for (const genre of el.genres) {
        if (genre === 'Comedy') {
          return el;
        }
      }
    });
    this.comedies = comedies;
  }

  listDramas() {
    const dramas = this.shows.filter((el) => {
      for (const genre of el.genres) {
        if (genre === 'Drama') {
          return el;
        }
      }
    });
    this.dramas = dramas;
  }

  listThrillers() {
    const thrillers = this.shows.filter((el) => {
      for (const genre of el.genres) {
        if (genre === 'Thriller') {
          return el;
        }
      }
    });
    this.thrillers = thrillers;
  }

  listActions() {
    const actions = this.shows.filter((el) => {
      for (const genre of el.genres) {
        if (genre === 'Action') {
          return el;
        }
      }
    });
    this.actions = actions;
  }

  showInfo(showId) {
    this.showService.showInfo(showId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.subscription2.unsubscribe();
  }
}
