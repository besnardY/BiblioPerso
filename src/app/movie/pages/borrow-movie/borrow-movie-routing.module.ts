import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrowMoviePage } from './borrow-movie.page';

const routes: Routes = [
  {
    path: '',
    component: BorrowMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowMoviePageRoutingModule {}
