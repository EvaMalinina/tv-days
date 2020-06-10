import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { FlickityModule } from 'ngx-flickity';
import { MatIconModule } from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [ ShowsComponent ],
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        ShowsRoutingModule,
        FlickityModule,
        MatIconModule,
        ScrollingModule
    ]
})

export class ShowsModule { }
