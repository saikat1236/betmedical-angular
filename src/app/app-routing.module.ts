import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: '',
        data: { preload: false, delay: false, breadcrumb: 'Home' },
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: '',
        data: { preload: false, delay: false, breadcrumb: 'Home' },
        loadChildren: () =>
          import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: '',
        data: { preload: true, delay: false, breadcrumb: 'Home' },
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    preloadingStrategy: PreloadAllModules
})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
