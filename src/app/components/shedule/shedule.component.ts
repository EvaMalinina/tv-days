import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ShowService} from '../../Services/shows.service';
import {ISheduledShow} from '../../Models/sheduled-show.model';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss']
})

export class SheduleComponent implements OnInit {

  scheduledShows: ISheduledShow[];

  constructor( private showService: ShowService) { }

  ngOnInit(): void {
    this.listScheduledShows();
  }

  listScheduledShows() {
    this.showService.sheduleShows().subscribe(res => {
        this.scheduledShows = res.slice( 0, 20 );
      },
      err => {
        console.log(err);
      });
  }
}
