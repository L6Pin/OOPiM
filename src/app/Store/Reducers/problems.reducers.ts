import { createReducer, on } from '@ngrx/store';
import * as ProblemActions from '../Actions/problems.actions';

export const PROBLEMS_FEATURE_KEY = 'problems';

export interface problemsState {
  problemsList: any[];
  user: null;
  userFailedLogin: boolean;
  userSuccessfulLogin: boolean;
}

export interface problemsPartialState {
  readonly [PROBLEMS_FEATURE_KEY]: problemsState;
}

export const initialState: problemsState = {
  problemsList: [],
  user: null,
  userFailedLogin: false,
  userSuccessfulLogin: false,
};

const _problemsReducer = createReducer(
  initialState,
  on(ProblemActions.getProfileInfoSuccess, (state, { userObject }) => {
    return {
      ...state,
      user: userObject,
      userFailedLogin: false,
      userSuccessfulLogin: true,
    };
  }),
  on(ProblemActions.getProfileInfoFailure, (state) => {
    return {
      ...state,
      userFailedLogin: true,
    };
  }),
  on(ProblemActions.getAllProblemsSuccess, (state, { allProblems }) => {
    return {
      ...state,
      problemsList: allProblems,
    };
  }),
  on(ProblemActions.getWorkerProblemsSuccess, (state, { workerProblems }) => {
    return {
      ...state,
      problemsList: workerProblems,
    };
  }),
  on(ProblemActions.geStaffProblemsSuccess, (state, { staffProblems }) => {
    return {
      ...state,
      problemsList: staffProblems,
    };
  }),
  on(ProblemActions.getSupplierProblemsSuccess, (state, { supplierProblems }) => {
    return {
      ...state,
      problemsList: supplierProblems,
    };
  }),
);

export function problemsReducer(state: any, actions: any) {
  return _problemsReducer(state, actions);
}
