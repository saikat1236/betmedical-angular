import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public categories = new BehaviorSubject<Category[]>([]);
  constructor(private api: ApiService) { }

  public getCategories(): Observable<any>{
    return this.api.get<any>('categories').pipe(map((res)=> res));
  }
  public allCategories(){
    this.getCategories().subscribe((res) => {
      this.categories.next(res.data);
    })
  }

  public getCategory(slug: string): Observable<any>{
    return this.api.get<any>(`category/${slug}`).pipe(map((res) => res.data));
  }

  public getProduct(slug: string): Observable<any>{
    return this.api.get<any>(`product/${slug}`).pipe(map((res) => res.data));
  }

  public getRelatedProducts(slug: string): Observable<Array<Product>> {
    return this.api
      .get<{ products: Array<Product> }>(`products/${slug}/related`)
      .pipe(map((res) => res.products));
  }

}
