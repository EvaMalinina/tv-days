import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShowService } from "../Services/shows.service";
import { Show } from "../Models/show";
import { IShow } from "../Models/show.model";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  providers: [ ShowService ],
  encapsulation: ViewEncapsulation.None,
})

export class ShowsComponent implements OnInit {
  // shows: IShow[] = [];
  shows: IShow[];
  comedies: IShow[];
  dramas: IShow[];
  thrillers: IShow[];
  actions: IShow[];
  bestRatesShows: IShow[];

  show: IShow = new Show(  '', '', '',
                    '', [], {average: ''},
                      {medium: '', original: ''});
  searchInput: string;


  constructor( private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.lists.subscribe(data => {

      // const list = [];
      // Object.keys(data).forEach(function (prop) {
      //   const val = data[prop];
      //   list.push(val);
      //
      // })
      this.shows = data;
      console.log('this.shows 1', this.shows)
      // this.listComedies();
      // this.listDramas();
      // this.listThrillers();
      // this.listActions();
      // this.listBestRatesShows();
    });

    this.listShows();
    console.log('listShows()', this.shows)
  }


  listShows() {
    this.showService.listShows();
  }

  listBestRatesShows() {
    let bestRatesShows = [];
    for ( let bestRateShow of this.shows) {
      let rate = bestRateShow.rating.average;
      if ( +rate >= 8.5 ){
        bestRatesShows.push(bestRateShow);
        this.bestRatesShows = bestRatesShows;
      }
    }
  }

  listComedies() {
    let comedies = [];
    for ( let comedy of this.shows) {
      for ( let genre of comedy.genres) {
        if ( genre === 'Comedy') {
          comedies.push(comedy);
          this.comedies = comedies;
        }
      }
    }
  }

  listDramas() {
    let dramas = [];
    for ( let drama of this.shows) {
      for ( let genre of drama.genres) {
        if ( genre === 'Drama') {dramas.push(drama);
          this.dramas = dramas;
        }
      }
    }
  }

  listThrillers() {
    let thrillers = [];
    for ( let thriller of this.shows) {
      for ( let genre of thriller.genres) {
        if ( genre === 'Thriller') {thrillers.push(thriller);
          this.thrillers = thrillers;
        }
      }
    }
  }

  listActions() {
    let actions = [];
    for ( let action of this.shows) {
      for ( let genre of action.genres) {
        if ( genre === 'Action') {actions.push(action);
          this.actions = actions;
        }
      }
    }
  }

  findAShow(param) {

  }
}
