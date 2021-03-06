import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,},
  {
    path: '',canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'new-book',
    loadChildren: () => import('./book/pages/new-book/new-book.module').then( m => m.NewBookPageModule)
  },
  {
    path: 'detail-book',
    loadChildren: () => import('./book/pages/detail-book/detail-book.module').then( m => m.DetailBookPageModule)
  },
  {
    path: 'edit-book',
    loadChildren: () => import('./book/pages/edit-book/edit-book.module').then( m => m.EditBookPageModule)
  },
  {
    path: 'borrow-book',
    loadChildren: () => import('./book/pages/borrow-book/borrow-book.module').then( m => m.BorrowBookPageModule)
  },
  {
    path: 'add-volume',
    loadChildren: () => import('./book/pages/add-volume/add-volume.module').then( m => m.AddVolumePageModule)
  },
  {
    path: 'new-movie',
    loadChildren: () => import('./movie/pages/new-movie/new-movie.module').then( m => m.NewMoviePageModule)
  },
  {
    path: 'detail-movie',
    loadChildren: () => import('./movie/pages/detail-movie/detail-movie.module').then( m => m.DetailMoviePageModule)
  },
  {
    path: 'borrow-movie',
    loadChildren: () => import('./movie/pages/borrow-movie/borrow-movie.module').then( m => m.BorrowMoviePageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
