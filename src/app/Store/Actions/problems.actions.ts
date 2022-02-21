import { createAction, props } from '@ngrx/store';

//Get profile
export const getProfileInfo = createAction(
  '[Login component] getProfileInfo',
  props<{ userObject: any }>()
);

export const getProfileInfoSuccess = createAction(
  '[Login component] getProfileInfoSuccess',
  props<{ userObject: any }>()
);

export const getProfileInfoFailure = createAction(
  '[Login component] getProfileInfoFailure'
);

//Get problems
export const getAllProblems = createAction('[Admin component] getAllProblems');

export const getAllProblemsSuccess = createAction(
  '[Admin component] getAllProblemsSuccess',
  props<{ allProblems: any }>()
);

export const getAllProblemsFailure = createAction(
  '[Admin component] getAllProblemsFailure'
);
