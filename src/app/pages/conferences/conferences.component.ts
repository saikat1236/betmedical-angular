import { Component } from '@angular/core';
import { PageService } from 'src/app/core/services/page.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent {
  events: any;
  constructor(private pageService: PageService) {}

  ngOnInit(){
    this.pageService.getConferences().subscribe((events)=> { 
      this.events = events;
    });
  }
}
