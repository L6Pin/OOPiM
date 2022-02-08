import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  problemsPartialState,
  problemsState,
  PROBLEMS_FEATURE_KEY,
} from '../Reducers/problems.reducers';

export const getMoviesState = createFeatureSelector<
problemsPartialState,
problemsState
>(PROBLEMS_FEATURE_KEY);

export const selectLoggedUser = createSelector(
  getMoviesState,
  (state: problemsState) => state.user
);

export const selectFailedLogin = createSelector(
  getMoviesState,
  (state: problemsState) => state.userFailedLogin
);

