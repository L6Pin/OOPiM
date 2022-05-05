import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as problemActions from '../Actions/problems.actions';
import * as problemSelectors from '../Selectors/problems.selectors';

@Injectable()
export class problemsFacade {
  constructor(private store: Store<any>) {}

  loggedUser$ = this.store.pipe(select(problemSelectors.selectLoggedUser));
  failedLogin$ = this.store.pipe(select(problemSelectors.selectFailedLogin));
  successfulLogin$ = this.store.pipe(
    select(problemSelectors.selectSuccessfulLogin)
  );
  allProblems$ = this.store.pipe(select(problemSelectors.selectAllProblems));

  public dispatchLoggedUser(userObjectfromForm: any) {
    this.store.dispatch(problemActions.getProfileInfo(userObjectfromForm));
  }

  public dispatchAllProblems() {
    this.store.dispatch(problemActions.getAllProblems());
  }

  public clearStateOnLogout(){
    this.store.dispatch(problemActions.clearStateOnLogout());
  }

  public dispatchAddProblem(problemObj: any) {
    this.store.dispatch(problemActions.addProblem(problemObj));
  }

  public dispatchWorkerProblems(workerId: any) {
    this.store.dispatch(problemActions.getWorkerProblems(workerId));
  }

  public dispatchStaffProblems(id: any) {
    this.store.dispatch(problemActions.getStaffProblems(id));
  }

  public dispatchSupplierProblems(id: any) {
    this.store.dispatch(problemActions.getSupplierProblems(id));
  }

}
