import { createReducer, on } from '@ngrx/store';
import * as ProblemActions from '../Actions/problems.actions';

export const PROBLEMS_FEATURE_KEY = 'problems';

export interface problemsState {
  problemsList: any[];
  user: null;
  userFailedLogin: boolean;
}

export interface problemsPartialState {
  readonly [PROBLEMS_FEATURE_KEY]: problemsState;
}

export const initialState: problemsState = {
  problemsList: [],
  user: null,
  userFailedLogin: false,
};

const _problemsReducer = createReducer(
  initialState,
  on(ProblemActions.getProfileInfoSuccess, (state, { userObject }) => {
    return {
      ...state,
      user: userObject,
      userFailedLogin: false,
    };
  }),
  on(ProblemActions.getProfileInfoFailure, (state) => {
    return {
      ...state,
      userFailedLogin: true,
    };
  })
);

export function problemsReducer(state: any, actions: any) {
  return _problemsReducer(state, actions);
}
