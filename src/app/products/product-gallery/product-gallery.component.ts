import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
  host: {ngSkipHydration: 'true'},
})
export class ProductGalleryComponent implements OnInit {
  @Input('product') product: any;

  images: GalleryItem[];
  isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,    
  ){
    if(isPlatformBrowser(this.platformId)){
      this.isBrowser = true;
    }

  }
  ngOnInit() {   
    this.initGallery();
  }
  ngOnChanges() {
    this.initGallery();
  }
  initGallery(){
    const images:any = [];
    this.product.images.forEach((image: any) => {
      images.push(new ImageItem({ src: image, thumb: image }));
    });    
    this.images = images;
    // this.images = [
    //   new ImageItem({ src: 'assets/images/products/mini-ortho-c-arm/Orthoscan-TAU-1512-1.jpg', thumb: 'assets/images/products/mini-ortho-c-arm/Orthoscan-TAU-1512-1.jpg' }),
    //   new ImageItem({ src: 'assets/images/products/mini-ortho-c-arm/Orthoscan-TAU-1512-2.jpg', thumb: 'assets/images/products/mini-ortho-c-arm/Orthoscan-TAU-1512-2.jpg' }),
    //   new ImageItem({ src: 'assets/images/products/mini-ortho-c-arm/Orthoscan-TAU-1512-3.jpg', thumb: 'assets/images/products/mini-ortho-c-arm/Orthoscan-TAU-1512-3.jpg' }),
    //   new ImageItem({ src: 'assets/images/products/mini-ortho-c-arm/Orthoscan-TAU-1512-4.jpg', thumb: 'assets/images/products/mini-ortho-c-arm/Orthoscan-TAU-1512-4.jpg' }),
    //   // ... more items
    // ];
  }
}
