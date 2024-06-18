import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { PageService } from '../services/page.service';
import { catchError, of } from 'rxjs';
import { EventImages } from '../models/event-images.model';

export const conferenceResolver: ResolveFn<boolean | EventImages> = (route, state) => {
  const router = inject(Router);
  const id = route.params['id'];
  const pageService = inject(PageService);
  return pageService.getConference(id).pipe(
    //tap((value) => {console.log('tt', value)}),
    catchError((_) => {
      router.navigate(['']);
      return of(new EventImages());
    })
  );
};
