import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef,Input, Inject, HostListener, PLATFORM_ID, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { Subscription, delay, filter } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ResizeService } from 'src/app/core/services/resize.service';
import { SessionFlow } from 'src/app/core/services/session-flow';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedProductsComponent {

  @Input() products: Array<Product>;

  options: OwlOptions = {
    loop: false,
    autoplay: true,
    autoplaySpeed:3000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false, 
    //autoHeight: true,
    autoWidth: true,
    // center: true,
    navSpeed: 500, //700
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    nav: true,
    margin: 15,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
  }
  @ViewChild('carousel', { static: true }) carousel: CarouselComponent;

  @HostListener('window:resize', ['$event'])
  onResize() {
      this._winResizeWatcher();
  }

  @HostListener('window:onload', ['$event'])
  onLoad() {
      this._winResizeWatcher();
  }

  carouselWindowWidth: number;
  resizeSubscription: Subscription;
  isMobile: boolean;
  isBrowser: boolean;
  setWidth: number;

  constructor(
    private el: ElementRef,   
    private resizeService: ResizeService,
    private mobileDetect: SessionFlow,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.isMobile = this.mobileDetect.isMobile;
  }

  ngOnInit(): void {
    this.carouselWindowWidth = this.el.nativeElement.querySelector(
      '.owl-carousel'
    ).clientWidth;
    if(this.isMobile){
      this.setWidth = 360;
    } else {
      this.setWidth = 278.75;
    }
    
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
  private _winResizeWatcher() {

    if(this.isMobile){
      this.setWidth = 350;
    } else {
      this.setWidth = 278.75;
    }
    //if (Object.keys(this.options?.responsive).length) {      
      const anyService = this.carousel as any;
      const carouselService = anyService.carouselService as CarouselService;      
      this.resizeSubscription = this.resizeService.onResize$
        .pipe(
          filter(() => this.carouselWindowWidth !== this.el.nativeElement.querySelector('.owl-carousel').clientWidth),
          delay(carouselService.settings.responsiveRefreshRate || 0)
        )
        .subscribe(() => {
          carouselService.onResize(this.el.nativeElement.querySelector('.owl-carousel').clientWidth);
          this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
        });
    //}
  }
}
