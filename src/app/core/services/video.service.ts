import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private api: ApiService) { }

  // public getBlog(slug: string): Observable<any>{
  //   return this.api.l_get<any>(`product/${slug}`).pipe(map((res) => res.data));
  // }
  public getVideo(): Observable<any>{
    return this.api.l_post<any>('videos').pipe(map((res) => res.data));
  }
}
