import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from "./shows/shows.component";
import {SheduleComponent} from "./shedule/shedule.component";

const routes: Routes = [
  {
    path: '',
    component: ShowsComponent,
  },
  {
    path: 'shedule',
    component: SheduleComponent,
  },
  {
    path: '**',
    component: ShowsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
