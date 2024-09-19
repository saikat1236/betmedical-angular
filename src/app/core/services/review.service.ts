import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private api: ApiService) { }

  public getReview(): Observable<any>{
    return this.api.l_post<any>('reviews').pipe(map((res) => res.data));
  }
  public getVideo(): Observable<any>{
    return this.api.l_post<any>('videos').pipe(map((res) => res.data));
  }
}
