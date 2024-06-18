import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { map } from 'rxjs';
import { EventImages } from 'src/app/core/models/event-images.model';
@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent {
  event: EventImages;
  
  galleryId = 'myLightbox';
  items: GalleryItem[];
  // items: GalleryItem[] = [
  //   new ImageItem({ src: 'assets/images/events/womens-day-1.jpg', thumb: 'assets/images/events/womens-day-1.jpg' }),
  //   new ImageItem({ src: 'assets/images/events/womens-day-2.jpg', thumb: 'assets/images/events/womens-day-2.jpg' }),
  //   new ImageItem({ src: 'assets/images/events/womens-day-3.jpg', thumb: 'assets/images/events/womens-day-3.jpg' }),
  //   new ImageItem({ src: 'assets/images/events/womens-day-4.jpg', thumb: 'assets/images/events/womens-day-4.jpg' }),
  // ];
  constructor(
    private route: ActivatedRoute,
    public gallery: Gallery, 
    public lightbox: Lightbox,
  ) {
    this.route.data.pipe(map(({event}) => event)).subscribe((event) => {
      this.event = event;
    });

  }

  ngOnInit() {
    // Load items into gallery
    const images:any = [];
    this.event.images.forEach((image: any) => {
      images.push(new ImageItem({ src: image, thumb: image }));
    });    
    this.items = images;
    
    this.items.forEach(item => {
      console.log(item?.data?.thumb);
    })
    
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
}
