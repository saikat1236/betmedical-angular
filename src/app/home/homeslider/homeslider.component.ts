import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
// import { Slider } from 'src/app/core/models/slider';
// import { PageService } from 'src/app/core/services/page.service';
// declare var $: any;
@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.scss']
})
export class HomesliderComponent {
  // currentIndex: number = 0;
  // slides: { videoSrc: string; text: string }[] = [
  //   { videoSrc: '../../../assets/vid123.m4v', text: 'Revolution in 3D imaging - Ziehm Imaging, Germany' },
  //   { videoSrc: '../../../assets/vid123.m4v', text: '3D Image Fusion Technology in hydrabad C-Arm / Cathlab - Endonaut AI & PAD Therenva, France' },
  //   { videoSrc: '../../../assets/vid123.m4v', text: 'A True HFO Technique for PICU & NICU - Mrtran, Japan' },
  //   { videoSrc: '../../../assets/vid123.m4v', text: 'BenQ Medical Technology - Corp, Taiwan' },
  //   { videoSrc: '../../../assets/vid123.m4v', text: 'BenQ Medical Technology - Corp, Taiwan' }
  // ];

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.nextSlide();
  //   }, 5000);
  // }

  // nextSlide() {
  //   this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  // }
  // slides = [
  //   { videoSrc: 'assets/video1.mp4', text: 'Revolution in 3D Imaging - Ziehm Imaging, Germany' },
  //   { videoSrc: 'assets/video2.mp4', text: '3D Image Fusion Technology - Endonaut AI, France' },
  //   { videoSrc: 'assets/video3.mp4', text: 'A True HFO Technique - Mrtran, Japan' },
  //   { videoSrc: 'assets/video4.mp4', text: 'BenQ Medical Technology - Corp, Taiwan' },
  // ];

  // ngAfterViewInit() {
  //   $('.owl-carousel').owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: true,
  //     items: 1,
  //     video:true,
  //     autoplay: true,
  //     autoplayTimeout: 5000,
  //     autoplayHoverPause: true,
  //   });
  // }
  partnersliderOptions1: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed:1000,
    // autoplayTimeout:500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // rtl:true,
    // navSpeed: 100,
    // navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    // nav: true,
    // margin: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1240:{
        items: 1
      }
    },
  }
}
