import { Component } from '@angular/core';
import { ShowService } from '../Services/shows.service';
import { Subject } from 'rxjs';
import { Show } from "../Models/show";
import { IShow } from "../Models/show.model";

@Component({
  selector: 'app-found-shows',
  templateUrl: './found-shows.component.html',
  styleUrls: ['./found-shows.component.scss'],
  providers: [ ShowService ]
})

export class FoundShowsComponent {

  public result;
  // result: IShow = new Show( '', '', '',
  //   '', [], {average: ''},
  //   {medium: '', original: ''}
  //   );

  searchTerm$ = new Subject<string>();

  constructor(private showService: ShowService) {
    this.showService.search(this.searchTerm$)
      // .subscribe(result => {
      //   this.result = result;
      // });
  }
}
