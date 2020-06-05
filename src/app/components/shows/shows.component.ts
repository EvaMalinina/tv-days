import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShowService } from '../../Services/shows.service';
import { IShow } from '../../Models/show.model';
import { Subscription } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  providers: [ HttpClientModule ]
})

export class ShowsComponent implements OnInit, OnDestroy {

  shows: IShow[];
  comedies: IShow[];
  dramas: IShow[];
  thrillers: IShow[];
  actions: IShow[];
  bestRatesShows: IShow[];
  checkedShows: IShow[];
  subscription: Subscription;
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
  }
}
