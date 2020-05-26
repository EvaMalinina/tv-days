import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShowService } from "../Services/shows.service";
import { Show } from "../Models/show";
import { IShow } from "../Models/show.model";

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
  // subscription: Subscription

  constructor( private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.lists.subscribe(data => {

      this.shows = data;
      this.listBestRatesShows();
      this.listComedies();
      this.listDramas();
      this.listThrillers();
      this.listActions();
    });

    this.listShows();
  }


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
    this.checkedShows.push(show);
    localStorage.setItem('shows', JSON.stringify(this.checkedShows));
    show.isSeen = !show.isSeen;
  }
}
