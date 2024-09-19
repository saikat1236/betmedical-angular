import { Component } from '@angular/core';
import { BlogService } from './../../../core/services/blog.service';
import { environment } from '../../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  data: any;
  asset_url: any;
    constructor(
      private blogService: BlogService, 
      private route: ActivatedRoute,
      private sanitized: DomSanitizer,
      private titleService: Title,  
      private metaTagService: Meta,
      private router: Router
    ) {}
     
     ngOnInit() { 
      // this.date = this.DatePipe.transform(new Date(), 'dd-MM-yyyy'); 
      const slug = this.route.snapshot.params['id'];
      console.log('slug', slug);
      this.asset_url = environment.apiAssetUrl; 
      this.blogService.getSingleBlog(slug).subscribe((posts)=> { 
        if(posts){
          this.data = posts;
          this.titleService.setTitle(this.data.meta_title);  
          this.metaTagService.addTags([  
            { name: 'keywords', content: this.data.meta_keywords },
            { name: 'description', content: this.data.meta_desc },
          ]);  
        } else {
          this.router.navigate(['/404']);
        }
      });
    }
    transform(value) {
      return this.sanitized.bypassSecurityTrustHtml(value);
    }
  
}
