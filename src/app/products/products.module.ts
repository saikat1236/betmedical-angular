import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailTabComponent } from './product-detail-tab/product-detail-tab.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { GalleryModule } from 'ng-gallery';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailTabComponent,
    RelatedProductsComponent,
    ProductGalleryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    YouTubePlayerModule,
    NgbNavModule,
    SharedModule,
    GalleryModule
  ]
})
export class ProductsModule { }
