import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-parnerslider2',
  templateUrl: './parnerslider2.component.html',
  styleUrls: ['./parnerslider2.component.scss']
})
export class ParnersliderComponent2 {
  partnersliderOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed:1000,
    // autoplayTimeout:500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    rtl:true,
    // navSpeed: 100,
    // navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    // nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      },
      1240:{
        items: 5
      }
    },
  }
}
