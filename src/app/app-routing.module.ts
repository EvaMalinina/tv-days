import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from "./shows/shows.component";
import { FoundShowsComponent } from "./found-shows/found-shows.component";


const routes: Routes = [{
  path: '',
  component: ShowsComponent,
},
  {
  path: 'found-shows',
  component: FoundShowsComponent,
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
