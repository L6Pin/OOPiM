import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../api.service';
import { Injectable, OnInit } from '@angular/core';
import * as ProblemActions from '../Actions/problems.actions';
import {
  catchError,
  concatMap,
  filter,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { problemsFacade } from '../Facade/problems.facade';

@Injectable()
export class ProblemsEffects {
  constructor(
    private actions: Actions,
    private api: ApiService,
    private router: Router,
    private facade: problemsFacade
  ) {}

  $user: Observable<any> = this.facade.loggedUser$;
  userRole: any;
  userId: any;

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

  getPopularMovies = createEffect(() =>
    this.actions.pipe(
      ofType(ProblemActions.getAllProblems),
      switchMap(() =>
        this.api
          .getAllProblems()
          .pipe(
            map((problems) =>
              ProblemActions.getAllProblemsSuccess({ allProblems: problems })
            )
          )
      )
    )
  );

  getWorkerProblems = createEffect(() =>
    this.actions.pipe(
      ofType(ProblemActions.getWorkerProblems),
      switchMap((user) =>
        this.api.getWorkerProblems(user).pipe(
          map((problems) =>
            ProblemActions.getWorkerProblemsSuccess({
              workerProblems: problems,
            })
          )
        )
      )
    )
  );

  getStaffProblems = createEffect(() =>
  this.actions.pipe(
    ofType(ProblemActions.getStaffProblems),
    switchMap((user) =>
      this.api.getStaffProblems(user).pipe(
        map((problems) =>
          ProblemActions.geStaffProblemsSuccess({
           staffProblems: problems,
          })
        )
      )
    )
  )
);

getSupplierProblems = createEffect(() =>
this.actions.pipe(
  ofType(ProblemActions.getSupplierProblems),
  switchMap((user) =>
    this.api.getSupplierProblems(user).pipe(
      map((problems) =>
        ProblemActions.getSupplierProblemsSuccess({
          supplierProblems: problems,
        })
      )
    )
  )
)
);


  addProblem = createEffect(() =>
    this.actions.pipe(
      ofType(ProblemActions.addProblem),
      concatMap((formObj) =>
        this.api.addProblem(formObj).pipe(
          map(() => {
            this.$user.subscribe((user) => {
              if (user.is_staff) this.userRole = 'staff';            
            });
            this.router.navigate([`/profile/${this.userRole}`]);
            return ProblemActions.addProblemSuccess();
          }),
          catchError(() => of(ProblemActions.getProfileInfoFailure()))
        )
      )
    )
  );
}
