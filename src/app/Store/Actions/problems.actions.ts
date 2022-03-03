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

//Get worker problems
export const getWorkerProblems = createAction(
  '[Worker component] getWorkerProblems',
  props<{ workerId: any }>()
);

export const getWorkerProblemsSuccess = createAction(
  '[Worker component] getWorkerProblemsSuccess',
  props<{ workerProblems: any }>()
);

//Get staff problems
export const getStaffProblems = createAction(
  '[Staff component] getStaffProblems',
  props<{ staffId: any }>()
)

export const getStaffProblemsSuccess = createAction(
  '[Worker component] getStaffProblemsSuccess',
  props<{ staffProblems: any }>()
);

//Add problem
export const addProblem = createAction(
  '[Add problem component] addProblem',
  props<{ addProblemObj: any }>()
);

export const addProblemSuccess = createAction(
  '[Add problem component] addProblemSuccess'
);
