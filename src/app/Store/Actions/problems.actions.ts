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

//Add problem
export const addProblem = createAction(
  '[Add problem component] addProblem',
  props<{ addProblemObj: any }>()
);

export const addProblemSuccess = createAction(
  '[Add problem component] addProblemSuccess'
);

//Staff problems
export const getStaffProblems = createAction(
  '[Staff component] getStaffProblems',
  props<{ staffId: any }>()
);

export const geStaffProblemsSuccess = createAction(
  '[Staff component] geStaffProblemsSuccess',
  props<{ staffProblems: any }>()
);

//Supplier problems
export const getSupplierProblems = createAction(
  '[Supplier component] getSupplierProblems',
  props<{ supplierId: any }>()
);

export const getSupplierProblemsSuccess = createAction(
  '[Supplier component] geSupplierProblemsSuccess',
  props<{ supplierProblems: any }>()
);
