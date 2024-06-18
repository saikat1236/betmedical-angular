import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Input, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-product-detail-tab',
  templateUrl: './product-detail-tab.component.html',
  styleUrls: ['./product-detail-tab.component.scss']
})
export class ProductDetailTabComponent {
  active = 1;
  videoId: any;
  galleryId = 'myLightbox';
  items: GalleryItem[];
  
  @Input('product') product: any;
  @ViewChild('player') player: any;
  public enabledVideo: boolean = false;
  public isBrowser: boolean = false;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private _document: Document,
    private sanitizer: DomSanitizer,
    public gallery: Gallery, 
    public lightbox: Lightbox,
  ){
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true; // for ssr
    }
  }

  
  ngOnInit(){      
    this.initProduct();    
  }
  ngOnChanges(){
    this.initProduct();
  }
  initProduct(){
    if(this.product.video_url){
      this.enabledVideo = true;
      this.playYoutube();
      this.videoId = this.YouTubeGetID(this.product.video_url);
    }
    if(this.product.vid_sec_type ==  2){
      this.lightBoxGallery();
    }
  }
  lightBoxGallery(){
    const images:any = [];
    this.product.vid_sec_img.forEach((image: any) => {
      images.push(new ImageItem({ src: image, thumb: image }));
    });    
    this.items = images;
    
    // this.items.forEach(item => {
    //   console.log(item?.data?.thumb);
    // })
    
    // const galleryRef = this.gallery.ref(this.galleryId);
    // galleryRef.load(this.items);
    // console.log(galleryRef);
    //

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)    

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
  openLightBox(i: number, item: any){
    this.lightbox.open(i, item);
  }
  openInFullScreen(index: number) {
    this.lightbox.open(index, this.galleryId, {
      panelClass: 'fullscreen'
    });
  }
  // updateVideoUrl(url: string){     
  //     this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //     console.log(this.videoUrl);
  // }

  playYoutube(): void {
    const tag = this._document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    this._document.body.appendChild(tag);
  }
   // Autoplay
  onReady(event: any) {    
    this.player.mute();         
    //this.player.playVideo();
    this.player.pauseVideo();
    //this.player.stopVideo();    
  }

  // Loop
  onStateChange(event: any) {
    //console.log(event);
    if (event.data === 0) {
      this.player.playVideo();  
    }
  }
  YouTubeGetID(url: any){
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }
}
