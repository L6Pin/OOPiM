import { createAction, props } from '@ngrx/store';

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
