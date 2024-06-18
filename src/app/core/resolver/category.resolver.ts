import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { ProductService } from 'src/app/core/services/product.service';

export const categoryResolver: ResolveFn<boolean| Category> = (route, state) => {  
  const router = inject(Router);
  const categorySlug = route.params['slug'];
  const categoryService = inject(ProductService);
  return categoryService.getCategory(categorySlug).pipe(
    //tap((value) => {console.log('tt', value)}),
    catchError((_) => {
      router.navigate(['']);
      return of(new Category());
    })
  );
};
