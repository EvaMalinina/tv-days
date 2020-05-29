import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ShowService } from "../Services/shows.service";
import { Show } from "../Models/show";
import { IShow } from "../Models/show.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ShowsComponent implements OnInit {

  shows: IShow[];
  comedies: IShow[];
  dramas: IShow[];
  thrillers: IShow[];
  actions: IShow[];
  bestRatesShows: IShow[];
  checkedShows: IShow[] = [];
  checkedShowsStorage = JSON.parse(localStorage.getItem("shows"));
  isSeen: boolean;
  subscription: Subscription

  constructor( private showService: ShowService) { }

  ngOnInit(): void {
    this.subscription = this.showService.lists.subscribe(data => {

      this.shows = data;
      // this.listCheckedShows();
      // this.listBestRatesShows();
      this.listComedies();
      this.listDramas();
      this.listThrillers();
      this.listActions();
    });

    this.listBestRatesShows();
    this.listShows();
  }

  // listCheckedShows() {
  //   this.checkedShowsStorage = JSON.parse(localStorage.getItem("shows"));
  //   console.log( this.checkedShowsStorage)
  // }

  listShows() {
    this.showService.listShows();
  }

  listBestRatesShows() {
    let bestRatesShows = this.shows.filter(function(el) {
      return +el.rating.average > 8.5;
    })
    this.bestRatesShows = bestRatesShows;
  }

  listComedies() {
    let comedies = this.shows.filter((el)=> {
      for (let genre of el.genres) {
        if (genre == "Comedy") {
          return el;
        }
      }
    })
    this.comedies = comedies;
  }

  listDramas() {
    let dramas = this.shows.filter((el)=> {
      for (let genre of el.genres) {
        if (genre == "Drama") {
          return el;
        }
      }
    })
    this.dramas = dramas;
  }

  listThrillers() {
    let thrillers = this.shows.filter((el)=> {
      for (let genre of el.genres) {
        if (genre == "Thriller") {
          return el;
        }
      }
    })
    this.thrillers = thrillers;
  }

  listActions() {
    let actions = this.shows.filter((el) => {
      for (let genre of el.genres) {
        if (genre == "Action") {
          return el;
        }
      }
    })
    this.actions = actions;
  }

  seenChecked(show) {
    // let arrExist = JSON.parse(localStorage.getItem('shows'));

    // if ( arrExist ) {
    //   // check for duplication
    //   this.checkedShows.push(show);
    //   //
    // } else {
      this.checkedShows.push(show);
      localStorage.setItem('shows', JSON.stringify(this.checkedShows));
      show.isSeen = !show.isSeen;
      this.checkedShowsStorage = JSON.parse(localStorage.getItem("shows"));

    // }
  }

  // ?
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
