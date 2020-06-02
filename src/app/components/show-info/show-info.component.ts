import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
import { ShowService } from '../../Services/shows.service';
import { IShow } from '../../Models/show.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
})

export class ShowInfoComponent implements OnInit, OnDestroy {

  // subscription: Subscription;
  data: IShow[];
  text: string;

  constructor( private showService: ShowService, ) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('res'));

    for (let show of this.data) {
      let text = show.summary;
      this.text = text.replace(/<\/?[^>]+(>|$)/g, "");
    }
    // this.subscription = this.showService.showInfoSeenList.subscribe(res => {
      // const resArr = [res];
      // this.data = resArr;
    // },
    //   ( err ) => {
    //     console.log(err);
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
