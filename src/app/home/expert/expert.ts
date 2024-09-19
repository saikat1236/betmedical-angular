import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewService } from './../../core/services/review.service';
import { environment } from '../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'expert',
  templateUrl: './expert.html',
  styleUrls: ['./expert.scss']
})
export class Expert {
  data: any;
  r_data: any;
  asset_url: any;
    constructor(
      private reviewService: ReviewService, 
      private sanitized: DomSanitizer) {}
     
     ngOnInit() { 
      
      // this.date = this.DatePipe.transform(new Date(), 'dd-MM-yyyy'); 
      this.asset_url = environment.apiAssetUrl; 
      this.reviewService.getReview().subscribe((review)=> { 
        this.data = review;
      });
      this.reviewService.getVideo().subscribe((video)=> { 
        this.r_data = video;
      });
    }
    transform(value) {
      return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
