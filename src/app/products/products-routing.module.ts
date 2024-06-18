import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { productResolver } from '../core/resolver/product.resolver';

const routes: Routes = [
    { 
        path: ':slug', 
        component: ProductsComponent, 
        resolve:{product: productResolver}, 
        data: { breadcrumb: (data: any) => `${data.product.name}` } 
    }
    //{ path: 'product', component: ProductsComponent, data: { breadcrumb: 'Product Name' } }
];
  
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule { }