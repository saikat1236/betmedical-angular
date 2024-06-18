import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { EventImages } from 'src/app/core/models/event-images.model';
import { PageService } from 'src/app/core/services/page.service';

export const EventResolver: ResolveFn<boolean | EventImages> = (route, state) => {
  const router = inject(Router);
  const id = route.params['id'];
  const pageService = inject(PageService);
  return pageService.getEvent(id).pipe(
    //tap((value) => {console.log('tt', value)}),
    catchError((_) => {
      router.navigate(['']);
      return of(new EventImages());
    })
  );
};
