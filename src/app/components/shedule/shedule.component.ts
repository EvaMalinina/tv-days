import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../Services/shows.service';
import { ISheduledShow } from '../../Models/sheduled-show.model';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss']
})
export class SheduleComponent implements OnInit {

  sheduledShows: ISheduledShow[];

  constructor( private showService: ShowService) { }

  ngOnInit(): void {
    // добавить прелоадер и после загрузки всего листа взять первые 20 и обработать их
    this.showService.sheduledLists.subscribe(data => {
      console.log(data);
      this.sheduledShows = data;
    });

    this.listSheduledShows();
  }

  listSheduledShows() {
    this.showService.sheduleShows();
  }
}
