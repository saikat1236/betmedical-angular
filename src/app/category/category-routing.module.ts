import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { categoryResolver } from '../core/resolver/category.resolver';

const routes: Routes = [
    { 
        path: 'category/:slug', 
        component: CategoryComponent, 
        resolve: {category: categoryResolver}, 
        data: { breadcrumb: (data: any) => `${data.category.category.name}` } 
    },
    //{ path: 'product-category', component: CategoryComponent, data: { breadcrumb: 'Category Name 1' } }
];
  
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CategoryRoutingModule { }