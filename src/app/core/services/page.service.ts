import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { EventImages } from '../models/event-images.model';
import { Slider } from '../models/slider';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private api: ApiService) { }

  public homeSlider(): Observable<Array<Slider>>{
    return this.api.get<{data: Slider[]}>('home-sliders').pipe(map((res) => res.data));
  }

  public getEvents(): Observable<EventImages[]>{
    return this.api.get<{data: EventImages[]}>('events').pipe(map((res) => res.data));
  }

  public getEvent(id: number): Observable<any>{
    return this.api.get<any>(`event/${id}`).pipe(map((res) => res.data));
  }

  public getConferences(): Observable<EventImages[]>{
    return this.api.get<{data: EventImages[]}>('conferences').pipe(map((res) => res.data));
  }

  public getConference(id: number): Observable<any>{
    return this.api.get<any>(`conference/${id}`).pipe(map((res) => res.data));
  }
}
