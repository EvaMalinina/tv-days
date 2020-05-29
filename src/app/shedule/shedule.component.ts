import { Component, OnInit } from '@angular/core';
import { ShowService } from "../Services/shows.service";
import { ISheduledShow } from "../Models/sheduled-show.model";

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss']
})
export class SheduleComponent implements OnInit {

  sheduledShows: ISheduledShow[];

  constructor( private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.sheduledLists.subscribe(data => {
      this.sheduledShows = data;
    });

    this.listSheduledShows();
  }

  listSheduledShows() {
    this.showService.sheduleShows();
  }
}
