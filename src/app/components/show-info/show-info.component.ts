import { Component, OnInit } from '@angular/core';
import { IShow } from '../../Models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
})

export class ShowInfoComponent implements OnInit {

  data: IShow;
  text: string;

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('res'));

    if ( this.data ) {
      const text = this.data.summary;
      this.text = text.replace(/<\/?[^>]+(>|$)/g, '');
    }
  }
}
