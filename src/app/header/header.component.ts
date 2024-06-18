import { ProductService } from './../core/services/product.service';
import { Component, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { HostListener } from '@angular/core';
import { Category } from '../core/models/category.model';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { NgbDropdown, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { ResizeService } from '../core/services/resize.service';
import { SessionFlow } from '../core/services/session-flow';
import { Platform } from '@angular/cdk/platform';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  collapsed = true;
  isNavbarFixed: boolean = false;
  categories: Category[];
  routerSub: Subscription;
  isMobile = false;
  // @ViewChild('drop') drop: NgbDropdown;
  // @ViewChild('drop1') drop1: NgbDropdown;
  // @ViewChild('drop2') drop2: NgbDropdown;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }
  
  constructor(
    private router: Router, 
    private product: ProductService,    
    private render: Renderer2,
    private resizeService: ResizeService,
    private sessionFlow: SessionFlow,
    @Inject(DOCUMENT) private _doc: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ){

  }
  ngOnInit(){

    if(isPlatformBrowser(this.platformId)){
      
      if(this.sessionFlow.isMobile){
        this.isMobile = true;
      } 
      
    }
    
    this.product.allCategories();
    this.product.categories.subscribe((res) => {
      this.categories = res; 
      //this.categories = [...this.categories, {'id': 3, 'name': 'test', 'slug': 'test', 'child': []}]
      //console.log(this.categories);
    });
    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){       
        let dropdown = this._doc.querySelectorAll('.nav-item.dropdown');
        for (let i = 0; i < dropdown.length; i++) {          
          this.render.removeClass(dropdown[i], 'show');
          this.render.removeClass(dropdown[i].lastChild, 'show');
        }
       
        // this.drop.close();
        // this.drop1.close();
        // this.drop2.close();
      }
    })
  }
  closeDrop(event, drop){   
    
    if(!this.isMobile){
      let anchor: NgbDropdownToggle = drop._anchor;
      if(event.offsetX > anchor.nativeElement.clientWidth){
        drop.close();
      }
      if(event.offsetY < anchor.nativeElement.clientTop){
        drop.close();
      }
      if(event.offsetX < anchor.nativeElement.clientLeft){
        drop.close();
      }
    }
    
  }
  showDrop(drop){
    if(!this.isMobile){
      drop.open();
    }
  }
  hideDrop(drop){
    if(!this.isMobile){
      drop.close();
    }
  }
}
