import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ScheduleRoutingModule } from './schedule-routing.module';


@NgModule({
  declarations: [ ScheduleComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    ScheduleRoutingModule
  ]
})

export class ScheduleModule { }
