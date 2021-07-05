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

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
