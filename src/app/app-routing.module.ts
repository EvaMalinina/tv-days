import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './components/shows/shows.component';
import {SheduleComponent} from './components/shedule/shedule.component';
import {ShowInfoComponent} from './components/show-info/show-info.component';

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
    path: 'info',
    component: ShowInfoComponent,
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
