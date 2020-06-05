import { NgModule } from '@angular/core';
import { ShowInfoComponent } from './show-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ShowInfoRoutingModule } from './shows-info-routing.module';


@NgModule({
  declarations: [ ShowInfoComponent ],
  imports: [
    CommonModule,
    ShowInfoRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})

export class ShowInfoModule { }
