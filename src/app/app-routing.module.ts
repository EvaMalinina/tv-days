import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './components/shows/shows.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./components/shows/shows.module').then(m => m.ShowsModule)
  },
  { path: 'info',
    loadChildren: () => import('./components/show-info/shows-info.module').then(m => m.ShowInfoModule)
  },
  { path: 'articles',
    loadChildren: () => import('./components/articles/articles.module').then(m => m.ArticlesModule)
  },
  { path: 'schedule',
    loadChildren: () => import('./components/schedule/schedule.module').then(m => m.ScheduleModule)
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
