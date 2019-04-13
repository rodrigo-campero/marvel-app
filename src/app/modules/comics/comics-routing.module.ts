import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';

const routes: Routes = [
  {
    path: 'comics',
    children: [
      { path: '', component: ComicsListComponent },
      { path: 'details/:id', component: ComicsDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
