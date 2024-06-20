import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-parnerslider',
  templateUrl: './parnerslider.component.html',
  styleUrls: ['./parnerslider.component.scss']
})
export class ParnersliderComponent {
  partnersliderOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed:50,
    // autoplayTimeout:500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // navSpeed: 100,
    // navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    // nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      },
      1240:{
        items: 5
      }
    },
  }
}
