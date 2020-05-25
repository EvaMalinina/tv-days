import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShowService } from "../Services/shows.service";
import { Show } from "../Models/show";
import { IShow } from "../Models/show.model";
import {log} from "util";
import {of} from "rxjs";

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

  show: IShow = new Show(
    {imdb: '', thetvdb: '', tvrage: '' },
    [],
    '',
    { medium: '', original: '' },
    '',
    '',
    {
      country: { name: '', code: '', timezone: '' },
      id: '',
      name: ''
    },
    '',
    '',
    { average: '' },
    '',
    { days: [], time: '' },
    '', '', '', '',
    '', '', '');

  searchTerm$: string;


  constructor( private showService: ShowService) {
    // this.searchTerm$.subscribe( value => {
    //   this.showService.searchEntries(value);
    // })
  }

  ngOnInit(): void {
    this.showService.lists.subscribe(data => {

      this.shows = data;
      console.log('data a', data)
      // this.listComedies();
      // this.listDramas();
      // this.listThrillers();
      // this.listActions();
      this.listBestRatesShows();
    });

    this.listShows();
  }


  listShows() {
    this.showService.listShows();
  }

  listBestRatesShows() {
    let bestRatesShows = [];
    for (let i in this.shows) {
      for (let [key, val] of Object.entries(this.shows[i])) {
        if (key === 'rating' && +val['average'] >= 8.5) {
          bestRatesShows.push(this.shows[i])
        }
      }
    }
  }

  listComedies() {
    let comedies = [];
    // for ( let comedy of this.shows) {
    //   for ( let genre of comedy.genres) {
    //     if ( genre === 'Comedy') {
    //       comedies.push(comedy);
    //       this.comedies = comedies;
    //     }
    //   }
    // }
    // for (let i in this.shows) {
    //   for (let [key, val] of Object.entries(this.shows[i])) {
    //     if (key === 'genres' && val === 'Comedy') {
    //       comedies.push(this.shows[i])
    //     }
    //   }
    // }
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
}
