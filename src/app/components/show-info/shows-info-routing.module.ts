import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowInfoComponent } from './show-info.component';

const routes: Routes = [{ path: '', component: ShowInfoComponent  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class ShowInfoRoutingModule { }
