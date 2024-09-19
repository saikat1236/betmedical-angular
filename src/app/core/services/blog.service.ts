import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private api: ApiService) { }


  public getBlog(): Observable<any>{
    return this.api.l_post<any>('blogs').pipe(map((res) => res.data));
  }
  public getSingleBlog(slug): Observable<any>{
    return this.api.l_post<any>('blog/'+slug).pipe(map((res) => res.data));
  }
}
