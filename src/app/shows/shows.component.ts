import {Component, OnDestroy, OnInit} from '@angular/core';
import { ShowService } from "../Services/shows.service";
import { Show } from "../Models/show";
import { IShow } from "../Models/show.model";
import { FilterPipeModule } from "../Pipe/searchShow.module";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  providers: [ ShowService, FilterPipeModule ],
})
export class ShowsComponent implements OnInit {

  shows: IShow[];
  show: IShow = new Show(  '', '', '',
                    '', [], {average: ''},
                      {medium: '', original: ''});
  searchInput: string;

  constructor( private showService: ShowService) { }

  ngOnInit(): void {
    this.listShows();
  }


  listShows() {
    this.showService.listShows().subscribe((data: IShow[]) => {
      const list = [];
      Object.keys(data).forEach(function(prop) {
        const val = data[prop];
        list.push(val);
      });
      this.shows = list;

    });
  }
}
