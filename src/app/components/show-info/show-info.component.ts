import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowService } from '../../Services/shows.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})

export class ShowInfoComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  public data;

  constructor( private showService: ShowService, ) { }

  ngOnInit(): void {
    // after reload the chosen show does not render
    // this.data = [JSON.parse(localStorage.getItem("res"))];
    console.log(this.data);
    this.subscription = this.showService.showInfoSeenList.subscribe(res => {
      console.log('data info', res);
      const resArr = [res];
      this.data = resArr;
    },
      ( err ) => {
        console.log(err);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
