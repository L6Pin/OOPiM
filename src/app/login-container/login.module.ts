import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './login-container.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { problemsReducer } from '../Store/Reducers/problems.reducers';
import { problemsFacade } from '../Store/Facade/problems.facade';
import { EffectsModule } from '@ngrx/effects';
import { ProblemsEffects } from '../Store/Effects/problems.effects';
import { MaterialModule } from '../material-module.module';

@NgModule({
  declarations: [LoginContainerComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StoreModule.forFeature('problems', problemsReducer),
    EffectsModule.forRoot([ProblemsEffects]),
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [problemsFacade],
})
export class LoginModule {}
