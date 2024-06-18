import { EventImages } from 'src/app/core/models/event-images.model';
import { PageService } from './../../core/services/page.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events: any;
  constructor(private pageService: PageService) {}

  ngOnInit(){
    this.pageService.getEvents().subscribe((events)=> { 
      this.events = events;
    });
  }
  
}
