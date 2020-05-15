import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ShowService} from "../Services/shows.service";
import { FilterPipeModule } from "../Pipe/searchShow.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ FilterPipeModule ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
