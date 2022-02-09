import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../api.service';
import { Injectable } from '@angular/core';
import * as ProblemActions from '../Actions/problems.actions';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProblemsEffects {
  constructor(
    private actions: Actions,
    private api: ApiService,
    private router: Router
  ) {}

  getProfileInfo = createEffect(() =>
    this.actions.pipe(
      ofType(ProblemActions.getProfileInfo),
      concatMap((userObject) =>
        this.api.login(userObject).pipe(
          map((user) => {
            this.router.navigate(['/profile']);
            return ProblemActions.getProfileInfoSuccess({ userObject: user });
          }),
          catchError(() => of(ProblemActions.getProfileInfoFailure()))
        )
      )
    )
  );
}
