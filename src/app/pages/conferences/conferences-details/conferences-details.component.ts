import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { map } from 'rxjs';
import { EventImages } from 'src/app/core/models/event-images.model';

@Component({
  selector: 'app-conferences-details',
  templateUrl: './conferences-details.component.html',
  styleUrls: ['./conferences-details.component.scss']
})
export class ConferencesDetailsComponent {
  event: EventImages;
  galleryId = 'myLightbox';
  items: GalleryItem[];
  // items: GalleryItem[] = [
  //   new ImageItem({ src: 'assets/images/conferences/NEOCON-2022-1.jpg', thumb: 'assets/images/conferences/NEOCON-2022-1.jpg' }),
  //   new ImageItem({ src: 'assets/images/conferences/NEOCON-2022-2.jpg', thumb: 'assets/images/conferences/NEOCON-2022-2.jpg' }),
  // ];
  constructor(
    private route: ActivatedRoute,
    public gallery: Gallery, 
    public lightbox: Lightbox
  ) { 
    this.route.data.pipe(map(({event}) => event)).subscribe((event) => {
      this.event = event;
    });
  }

  ngOnInit() {

    const images:any = [];
    this.event.images.forEach((image: any) => {
      images.push(new ImageItem({ src: image, thumb: image }));
    });    
    this.items = images;

    // Load items into gallery
    
    this.items.forEach(item => {
      console.log(item?.data?.thumb);
    })
    
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
