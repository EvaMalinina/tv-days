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
    this.comedies = this.shows.filter((el) => el.genres.includes('Comedy'));
  }

  listDramas() {
    this.dramas = this.shows.filter((el) => el.genres.includes('Drama'));
  }

  listThrillers() {
    this.thrillers = this.shows.filter((el) => el.genres.includes('Thriller'));
  }

  listActions() {
    this.actions = this.shows.filter((el) => el.genres.includes('Action'));
  }

  showInfo(showId) {
    this.showService.showInfo(showId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
