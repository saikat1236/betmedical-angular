import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

export const productResolver: ResolveFn<boolean | Product> = (route, state) => {
  const router = inject(Router);
  const productSlug = route.params['slug'];
  const productService = inject(ProductService);
  return productService.getProduct(productSlug).pipe(
    tap((value) => {console.log('tt', value)}),
    catchError((_) => {
      router.navigate(['']);
      return of(new Product());
    })
  );
};
