import { Component, ViewEncapsulation } from '@angular/core';
import { ShowService } from "../Services/shows.service";
import { Subject } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ ShowService ]
})

export class HeaderComponent {

  public result;
  // searchTerm$ = new Subject<string>();

  constructor(private showService: ShowService) {
    // this.showService.searchEntries(this.searchTerm$)
      // .subscribe(result => {
      //   this.result = result;
      // });
  }

  searchShow(name) {
      this.showService.searchEntries(name);
  }
}
