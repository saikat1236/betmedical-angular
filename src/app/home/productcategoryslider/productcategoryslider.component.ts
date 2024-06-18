import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/models/category.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-productcategoryslider',
  templateUrl: './productcategoryslider.component.html',
  styleUrls: ['./productcategoryslider.component.scss']
})
export class ProductcategorysliderComponent {
  homeproductcategoryOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed:3000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    nav: true,
    margin: 15,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
  }
  sliderItems: any = [
    {
      slideid: 1,
      title: "Surgical OR Table",
      image: 'assets/images/home/product-category/surgical-or-table.jpg',
      content: "High Quality, Reliable, Radiolucent and Innovative Surgical OR Tables From Benq Medical Technology Corporation, Taiwan",
      url: ""
    },
    {
      slideid: 2,
      title: "Surgical LED OR Lights",
      image: 'assets/images/home/product-category/surgical-or-lights.jpg',
      content: "High Efficiency, Superior Optical Performance Surgical LED OR Lights From BenQ Medical Technology Corporation, Taiwan",
      url: ""
    },
    {
      slideid: 3,
      title: "Mobile Imaging System",
      image: 'assets/images/home/product-category/mobile-imaging-system.jpg',
      content: "2D & 3D Imaging Solutions from Ziehm Imaging, Germany; 50 years of continuous innovation",
      url: ""
    },
    {
      slideid: 4,
      title: "Mini Ortho C-Arm",
      image: 'assets/images/home/product-category/mini-ortho-c-arm.jpg',
      content: "State-Of-The-Art Innovative Solutions For Orthopedic Imaging from OrthoscanInc, USA; Global Leader In Mini C-Arm Imaging",
      url: ""
    },
    {
      slideid: 5,
      title: "Imaging Tables",
      image: 'assets/images/home/product-category/imaging-table.jpg',
      content: "Full Carbon Fibre Table Compatible with 3d & 2d C-Arm for Vascular catheterization and Orthopedic Navigation surgeries from Hotborn Medical Equipment Co., Ltd., China",
      url: ""
    },
    {
      slideid: 6,
      title: "Spine Tables",
      image: 'assets/images/home/product-category/isomed.jpg',
      content: "Smooth and Flexible Carbon Fibre Spine attachment for surgical Table from ISO Medical Systems Inc, Japan",
      url: ""
    },
    {
      slideid: 7,
      title: "Therenva Fusion Imaging & Navigation",
      image: 'assets/images/home/product-category/fusion-imaging.jpg',
      content: "Advanced And User-Friendly AI Imaging Software for Endovascular Case Planning To Intra-Operative Navigation from Therenva, France",
      url: ""
    },
    {
      slideid: 8,
      title: "Breast Imaging System",
      image: 'assets/images/home/product-category/mammography.jpg',
      content: "State of the art solutions for screening and breast tomosynthesis, High-performance mammography systems with proven reliability from Metaltronica, Italy.",
      url: ""
    },
    {
      slideid: 9,
      title: "Critical Care Ventilators",
      image: 'assets/images/home/product-category/ventilation.jpg',
      content: "A state-of-the-art piston-type HFO ventilator that brings together over 30 years’ worth of technological achievements MetranCo.,Ltd, Japan",
      url: ""
    },
    {
      slideid: 10,
      title: "Digital Radiography",
      image: 'assets/images/home/product-category/digital-radiography.jpg',
      content: "Standard and Mobile digital X-ray system with high durability and Reliability from SITEC Medical Co.,Ltd., Korea",
      url: ""
    },
    

  ]
  categories: Category[];
  constructor(
      private product: ProductService,
    ){

    }
  ngOnInit(){

    this.product.categories.subscribe((res) => {
      this.categories = res; 
      //this.categories = [...this.categories, {'id': 3, 'name': 'test', 'slug': 'test', 'child': []}]
     
      if(this.categories.length){
        this.sliderItems.forEach(slider => {        
          if(slider.slideid == 1 ){
            const category = this.categories.find(cat => cat.id == 2);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
          if(slider.slideid === 2 ){
            const category = this.categories.find(cat => cat.id == 15);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
          if(slider.slideid === 3 ){
            const category = this.categories.find(cat => cat.id == 16);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
          if(slider.slideid === 4 ){
            const category = this.categories.find(cat => cat.id === 41);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
          if(slider.slideid === 5 ){
            const category = this.categories.find(cat => cat.id === 37);
            slider.url = category?.slug;
          }
          if(slider.slideid === 6 ){
            const category = this.categories.find(cat => cat.id === 38);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
          if(slider.slideid === 7 ){
            const category = this.categories.find(cat => cat.id === 36);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
          if(slider.slideid === 8 ){
            const category = this.categories.find(cat => cat.id === 39);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
          if(slider.slideid === 9 ){
            const category = this.categories.find(cat => cat.id === 40);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
          if(slider.slideid === 10 ){
            const category = this.categories.find(cat => cat.id === 42);
            slider.title = category?.name;
            slider.url = category?.slug;
          }
         
        });
      }
      
      
    });
    
  }
}
