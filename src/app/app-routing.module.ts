import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'new-book',
    loadChildren: () => import('./book/pages/new-book/new-book.module').then( m => m.NewBookPageModule)
  },
  {
    path: 'book-detail',
    loadChildren: () => import('./book/pages/book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
