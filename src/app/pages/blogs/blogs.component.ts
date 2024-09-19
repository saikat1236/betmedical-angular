import { Component } from '@angular/core';
import { BlogService } from './../../core/services/blog.service';
import { environment } from '../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  datas: any;
  asset_url: any;
    constructor(
      private blogService: BlogService, 
      private sanitized: DomSanitizer) {}
     
     ngOnInit() { 
      
      // this.date = this.DatePipe.transform(new Date(), 'dd-MM-yyyy'); 
      this.asset_url = environment.apiAssetUrl; 
      this.blogService.getBlog().subscribe((posts)=> { 
        this.datas = posts;
        console.log('dada', this.datas)
      });
    }
    transform(value) {
      return this.sanitized.bypassSecurityTrustHtml(value);
    }
  
}
