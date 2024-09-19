import { Component } from '@angular/core';
import { BlogService } from './../../core/services/blog.service';
import { environment } from '../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'blog',
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class Blog {
  data: any;
  asset_url: any;
    constructor(
      private blogService: BlogService, 
      private sanitized: DomSanitizer) {}
     
     ngOnInit() { 
      
      // this.date = this.DatePipe.transform(new Date(), 'dd-MM-yyyy'); 
      this.asset_url = environment.apiAssetUrl; 
      this.blogService.getBlog().subscribe((posts)=> { 
        this.data = posts;
      });
    }
    transform(value) {
      return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
