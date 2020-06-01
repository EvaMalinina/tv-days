import { Component, ViewEncapsulation } from '@angular/core';
import { ShowService } from '../../Services/shows.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent {

  constructor(private showService: ShowService) { }

  searchShow(name) {
    this.showService.searchEntries(name);
  }
}
