import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'betmedical-frontend';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc: Document
  ) { 
  }
  
  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
      this.createPreconnect();
    }
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if(event instanceof NavigationEnd){
          if (isPlatformBrowser(this.platformId)) {
            this.scrollPageToTop();            
          }
        }     
      });
    
  }
  scrollPageToTop() {
    window.scroll(0, 0);
  }
  private createPreconnect(){
    const link = this.doc.createElement('link');    
    link.rel = "preconnect";
    link.crossOrigin = '';    
    link.href = `${environment.baseUrl}`;
    this.doc.head.appendChild(link);
  }
}
