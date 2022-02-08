import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as problemActions from '../Actions/problems.actions';
import * as problemSelectors from '../Selectors/problems.selectors';

@Injectable()
export class problemsFacade {
  constructor(private store: Store<any>) {}

  loggedUser$ = this.store.pipe(select(problemSelectors.selectLoggedUser));
  failedLogin$ = this.store.pipe(select(problemSelectors.selectFailedLogin));

  public dispatchLoggedUser(userObjectfromForm: any) {
    this.store.dispatch(problemActions.getProfileInfo(userObjectfromForm));
  }
}
