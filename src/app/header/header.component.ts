import { Component, ViewEncapsulation } from '@angular/core';
import { ShowService } from "../Services/shows.service";
import { FilterPipeModule } from "../Pipe/searchShow.module";
import { Subject } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ FilterPipeModule, ShowService ]
})

export class HeaderComponent {

  public result;
  searchTerm$ = new Subject<string>();

  constructor(private showService: ShowService) {
    this.showService.search(this.searchTerm$)
      .subscribe(result => {
        this.result = result;
      });
  }

}
